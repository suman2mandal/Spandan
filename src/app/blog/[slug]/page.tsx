
import clientPromise from '@/lib/mongodb';
// import { mdxComponents } from '@/components/mdx-components/mdxComponents';
import Link from 'next/link';
import CWrapper from '@/components/wrappers/component-wrapper';
import Image from 'next/image';
import { compileMDX } from 'next-mdx-remote/rsc';

type Frontmatter = {
  title: string;
  date: string;
  description?: string;
  author?: string;
  coverImage?: string;
  tag?: string;
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = decodeURIComponent(slug);

  const client = await clientPromise;
  const db = client.db('Blog');
  
  const post = await db.collection('Post').findOne({ slug: title });
    // const post = await db.collection('Post').findOne({ slug: "brave-pup-saved-from-highway-chaos" });


  if (!post || !post.content) return <>Custom page showing post not found!!</>

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source: post.content, // ← this must be 'source', not 'rawdata'
    options: { parseFrontmatter: true },
    // components: mdxComponents,
  });

  return (
    <CWrapper>
     <article className="prose">
       <div className="max-w-screen-4xl relative">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={frontmatter.coverImage || "/images/SpandanLogo.png"}
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
