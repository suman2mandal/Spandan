import { compileMDX } from 'next-mdx-remote/rsc';
import fs from 'fs/promises';
import path from 'path';
import { Bookmark, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import CWrapper from '@/components/wrappers/component-wrapper';

export const dynamic = 'force-dynamic';

export default async function LawReader({ params }: { params: { slug?: string } }) {
  if (!params?.slug) {
    return <div className="text-center text-red-600 mt-10">Invalid page: No law specified.</div>;
  }

  try {
    const filePath = path.join('content/animal-law', `${params.slug}.mdx`);
    const source = await fs.readFile(filePath, 'utf-8');

    const { content, frontmatter } = await compileMDX<{
      title: string;
      date: string;
      author: string;
      coverImage: string;
      description: string;
      tag: string;
    }>({
      source,
      options: { parseFrontmatter: true },
    });

    // console.log('.........',content);
    // const readingTime = Math.ceil(content.split(" ").length / 180);

    return (
      <CWrapper>
        {/* Table of Contents */}
        {/* <aside className="lg:w-1/4 hidden lg:block sticky top-28 self-start">
          <div className="dark:bg-gray-700 dark:border-gray-900 shadow rounded-xl border border-teal-100 p-4">
            <h3 className="text-lg font-semibold mb-2 dark:text-teal-500 text-teal-700">On this page</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {content.match(/###[ ](.+)/g)?.map((heading, i) => (
                <li key={i}>
                  <Link href={`#section-${i}`} scroll={true} className="hover:text-teal-600 dark:text-white">
                    {heading.replace(/^### /, '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside> */}

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
              <Clock className="w-4 h-4" />
              {/* {readingTime} min read */}
            </span>
            <span>Last updated on {frontmatter.date}</span>
            <button className="ml-auto text-teal-600 hover:text-teal-800 flex items-center gap-1">
              <Bookmark className="w-4 h-4" /> Bookmark
            </button>
            <button className="text-gray-500 hover:text-teal-700 flex items-center gap-1">
              <Share2 className="w-4 h-4" /> Share
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
  } catch (error) {
    console.error("Error loading MDX content:", error);
    return (
      <div className="text-center text-red-600 mt-10">
        ❌ This animal law content could not be found. Please check the URL or try another law.
      </div>
    );
  }
}