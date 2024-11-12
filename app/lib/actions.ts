'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// Schema de validação para uma história
const StorySchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: 'O título é obrigatório.' }),
  subtitle: z.string().min(1, { message: 'O subtítulo é obrigatório.' }),
  content: z.string().min(1, { message: 'O conteúdo é obrigatório.' }),
  coverImageUrl: z
    .string()
    .url({ message: 'A URL da imagem de capa é inválida.' }),
  authorId: z.string().min(1, { message: 'O ID do autor é obrigatório.' }),
});

// Tipo de estado para exibir erros
export type State = {
  errors?: {
    title?: string[];
    subtitle?: string[];
    content?: string[];
    coverImageUrl?: string[];
  };
  message?: string | null;
};

export async function findUserByEmail(email: string) {
  const user = await sql`
    SELECT * FROM users WHERE email = ${email}
  `;
  return user.rows[0]; // Retorna o primeiro usuário encontrado
}

// Função para validar credenciais
export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

// Função para buscar todas as histórias
const ITEMS_PER_PAGE = 8; 

export async function getStories(page: number, query: string) {
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const stories = await sql`
    SELECT id, title, subtitle, visibility, created_at
    FROM stories
    WHERE
          stories.title ILIKE ${`%${query}%`} OR
          stories.subtitle ILIKE ${`%${query}%`} OR
          stories.content ILIKE ${`%${query}%`}
    ORDER BY created_at DESC
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset};
  `;
  
  return stories.rows;
}



// Função para buscar uma história específica pelo ID
export async function getStoryById(id: string) {
  try {
    const story = await sql`
      SELECT * FROM stories WHERE id = ${id};
    `;
    return story.rows[0];
  } catch (error) {
    throw new Error(`Erro ao buscar história com id ${id}. Erro: ${error}`);
  }
}

// Função para criar uma nova história
export async function createStory(prevState: State, formData: FormData) {
  const validatedFields = StorySchema.safeParse({
    title: formData.get('title'),
    subtitle: formData.get('subtitle'),
    content: formData.get('content'),
    coverImageUrl: formData.get('coverImageUrl'),
    authorId: formData.get('authorId'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos inválidos. Falha ao criar história.',
    };
  }

  const { title, subtitle, content, coverImageUrl, authorId } =
    validatedFields.data;

  try {
    await sql`
      INSERT INTO stories (title, subtitle, content, cover_image_url, author_id, created_at)
      VALUES (${title}, ${subtitle}, ${content}, ${coverImageUrl}, ${authorId}, NOW())
    `;
  } catch (error) {
    throw new Error(
      `Erro ao inserir história: ${
        error instanceof Error ? error.message : 'Erro desconhecido'
      }`
    );
  }

  revalidatePath('/');
  redirect('/');
}

// Função para atualizar uma história existente
export async function updateStory(id: string, formData: FormData) {
  const validatedFields = StorySchema.parse({
    title: formData.get('title'),
    subtitle: formData.get('subtitle'),
    content: formData.get('content'),
    coverImageUrl: formData.get('coverImageUrl'),
    authorId: formData.get('authorId'),
  });

  const { title, subtitle, content, coverImageUrl, authorId } = validatedFields;

  try {
    await sql`
      UPDATE stories
      SET title = ${title}, subtitle = ${subtitle}, content = ${content}, cover_image_url = ${coverImageUrl}, author_id = ${authorId}
      WHERE id = ${id}
    `;
  } catch (error) {
    throw new Error(
      `Erro ao atualizar história: ${
        error instanceof Error ? error.message : 'Erro desconhecido'
      }`
    );
  }

  revalidatePath('/');
  redirect('/');
}

// Função para deletar uma história
export async function deleteStory(id: string) {
  try {
    await sql`DELETE FROM stories WHERE id = ${id}`;
    revalidatePath('/');
    return { message: 'História deletada com sucesso.' };
  } catch (error) {
    throw new Error(
      `Erro ao deletar história: ${
        error instanceof Error ? error.message : 'Erro desconhecido'
      }`
    );
  }
}

