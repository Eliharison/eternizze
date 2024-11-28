import { db } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { users, stories } from '@/app/lib/placeholder-data';

const client = await db.connect();

// Função para seedar usuários
async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, username, email, password)
        VALUES (${user.id}, ${user.username}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

// Função para seedar histórias
async function seedStories() {
  // Define o tipo ENUM para visibilidade, se ele não existir
  await client.sql`
    DO $$ 
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'story_visibility') THEN
        CREATE TYPE story_visibility AS ENUM ('public', 'private');
      END IF;
    END$$;
  `;

  await client.sql`
    CREATE TABLE IF NOT EXISTS stories (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      subtitle VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      cover_image_url TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW(),
      author_id UUID REFERENCES users(id) ON DELETE SET NULL,
      visibility story_visibility DEFAULT 'public'
    );
  `;

  const insertedStories = await Promise.all(
    stories.map(
      (story) => client.sql`
        INSERT INTO stories (id, title, subtitle, content, cover_image_url, author_id, visibility)
        VALUES (${story.id}, ${story.title}, ${story.subtitle}, ${story.content}, ${story.cover_image_url}, ${story.author_id}, ${story.visibility})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedStories;
}

// Endpoint para seeding do banco de dados
export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedStories();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}