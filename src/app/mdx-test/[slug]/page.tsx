import Image from 'next/image';
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

export default async function Page({ params }: { params: Promise<{ slug?: string }> }) {
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
    <CWrapper>
    <article className="prose">
      <div className="max-w-screen-4xl relative">
       <div className="overflow-hidden rounded-lg shadow-lg">
         <Image
          src={frontmatter.coverImage}
          alt="Blog Hero"
          width={1800}
          height={1000}
          className="object-cover w-full h-96"
          priority
        />
      </div>

      {/* Blog Card */}
      <div className="max-w-6xl mx-auto -mt-32 z-10 relative">
        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-10">
          <h1 className="text-2xl sm:text-5xl font-bold text-gray-900 mb-4">
            {frontmatter.title}
          </h1>

          <p className="text-sm text-gray-600 mb-2">
            Written By:{' '}
            <Link href="#" className="text-teal-600 hover:text-teal-800 font-semibold">
              {frontmatter.author}
            </Link>{' '}
            On{' '}
            <Link href="#" className="text-teal-600 hover:text-teal-800 text-sm">
              {frontmatter.date}
            </Link>
          </p>

          <div className="text-gray-700 leading-relaxed space-y-6 mt-6 text-base">
            {content}
          </div>

          {/* Tags */}
          {frontmatter.tag?.split(',').map((tag: string) => (
            <Link
              key={tag.trim()}
              href="#"
              className="text-sm mr-2 text-teal-600 hover:text-teal-800 font-medium"
            >
              #{tag.trim()}
            </Link>
          ))}


        </div>
      </div>
    </div>
    </article>
    </CWrapper>
  );
}