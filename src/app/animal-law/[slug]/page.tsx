import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';
import fs from 'fs/promises';
import path from 'path';
import CWrapper from '@/components/wrappers/component-wrapper';

type Frontmatter = {
  title: string;
  date?: string;
  author?: string;
  description: string;
  coverImage: string;
  tag: string;
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const source = await fs.readFile(path.join('content/animal-law', `${slug}.mdx`), 'utf-8');
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

    return (
      <CWrapper>
        {/* Main Content */}
        <main className="w-full">
          <div className="mb-10 relative rounded-xl overflow-hidden shadow-lg">
            <div
              className="h-56 sm:h-96 flex items-center justify-center text-center px-4"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 128, 128, 0.3)), url('${frontmatter.coverImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h1 className="text-white text-3xl sm:text-5xl font-bold font-raleway max-w-3xl">
                {frontmatter.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm  text-gray-500 mb-10">
            <span className="flex items-center gap-1">
              {/* <Clock className="w-4 h-4" /> */}
              {/* {readingTime} min read */}
            </span>
            <span>Last updated on {frontmatter.date}</span>
            <button className="ml-auto text-teal-600 hover:text-teal-800 flex items-center gap-1">
              {/* <Bookmark className="w-4 h-4" /> Bookmark */}
            </button>
            <button className="text-gray-500 hover:text-teal-700 flex items-center gap-1">
              {/* <Share2 className="w-4 h-4" /> Share */}
            </button>
          </div>

          <article className="prose dark:text-white prose-teal max-w-none dark:prose-invert">
            {content}
          </article>

          {/* Optional Navigation */}
          <div className="mt-12 flex justify-between text-sm text-teal-600">
            <Link href="/animal-laws/abc-program" className="hover:underline">
              ← ABC Rules, 2001
            </Link>
            <Link href="/animal-law/wildlife-protection" className="hover:underline">
              Wildlife Protection Act, 1972 →
            </Link>
          </div>
        </main>
      </CWrapper>
    );
}