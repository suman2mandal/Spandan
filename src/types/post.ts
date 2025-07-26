// types/law.ts

export interface PostFrontmatter {
  title: string;
  description?: string;
  coverImage?: string;
  tag?: string;
  date?: string;
  author?: string;
}

export interface Post extends PostFrontmatter {
  slug: string; // unique identifier for the post
  content: string; // includes raw MDX content
}
