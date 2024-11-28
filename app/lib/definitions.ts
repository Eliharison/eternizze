export type User = {
  [x: string]: string;
  id: string; // UUID
  username: string;
  email: string;
  passwordHash: string;
};

export type Story = {
  id: string; // UUID
  title: string;
  subtitle: string;
  content: string; // Campo para armazenar o conteúdo completo
  coverImageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  visibility: 'public' | 'private';
  authorId: string; // FK referencing User
};

// export type Card = {
//     id: number;
//     title: string;
//     description?: string;
//     imageUrl: string;
//     createdAt: Date;
//     updatedAt: Date;
//     storyId: number; // FK referencing Story
// };

// export type Comment = {
//     id: number;
//     content: string;
//     createdAt: Date;
//     updatedAt: Date;
//     storyId: number; // FK referencing Story
//     userId: number;  // FK referencing User
// };

// export type Tag = {
//     id: number;
//     name: string;
//     createdAt: Date;
// };

// export type StoryTag = {
//     storyId: number; // FK referencing Story
//     tagId: number;   // FK referencing Tag
// };
