import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_ROOT = path.join(process.cwd(), 'content');
export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  tag: string;
};


export function getAllPosts(type: 'blog' | 'animal-law'): PostMeta[] {
  const dir = path.join(CONTENT_ROOT, type);

  return fs.readdirSync(dir).map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const fullPath = path.join(dir, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    // Validate that required frontmatter fields exist
    if (!data.title || !data.date || !data.description) {
      throw new Error(`Missing required frontmatter in ${filename}`);
    }

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      coverImage: data.coverImage || '/images/default.jpg',
      tag: data.tag || 'General',
    };
  });
}
