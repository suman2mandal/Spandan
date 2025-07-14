import { compileMDX } from 'next-mdx-remote/rsc';
import fs from 'fs/promises';
import path from 'path';

type Frontmatter = {
  title: string;
  date?: string;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const source = await fs.readFile(path.join('content/blog', `${params.slug}.mdx`), 'utf-8');
  console.log('Source:', source);

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  return (
    <article className="prose">
      <h1>{frontmatter.title}</h1> {/* ✅ no more TypeScript error */}
      {content}
    </article>
  );
}
