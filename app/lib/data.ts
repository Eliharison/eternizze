import { sql } from '@vercel/postgres';

const ITEMS_PER_PAGE = 3;

export async function fetchStoriesPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
        FROM stories
        JOIN users ON stories.author_id = users.id
        WHERE
          stories.title ILIKE ${`%${query}%`} OR
          stories.subtitle ILIKE ${`%${query}%`} OR
          stories.content ILIKE ${`%${query}%`}
      `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error('Failed to fetch total number of stories.');
  }
}
