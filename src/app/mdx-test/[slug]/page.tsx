import { compileMDX } from 'next-mdx-remote/rsc';
import fs from 'fs/promises';
import path from 'path';

type Frontmatter = {
  title: string;
  date?: string;
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const source = await fs.readFile(
    path.join('content/blog', `${slug}.mdx`),
    'utf-8'
  );

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  return (
    <article className="prose">
      <h1>{frontmatter.title}</h1>
      {content}
    </article>
  );
}