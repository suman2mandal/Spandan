// types/law.ts

export interface LawFrontmatter {
  title: string;
  description: string;
  coverImage: string;
  slug: string;
  date?: string;
}

export interface Law extends LawFrontmatter {
  slug: string; // unique identifier for the law
  content: string; // includes raw MDX content
  createdAt?: Date|string; // optional, for creation date
}
