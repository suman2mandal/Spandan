// types/law.ts

export interface LawFrontmatter {
  title: string;
  description: string;
  coverImage: string;
  slug: string;
  date?: string;
}

export interface Law extends LawFrontmatter {
  content: string; // includes raw MDX content
}
