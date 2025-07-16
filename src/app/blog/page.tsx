export const dynamic = 'force-dynamic';
import { compileMDX } from 'next-mdx-remote/rsc';
import clientPromise from '@/lib/mongodb';
import Image from 'next/image';
import Link from 'next/link';
import CWrapper from '@/components/wrappers/component-wrapper';
// import Heading from '@/components/wrappers/Header';
import Color from '@/components/mdx-components/Color';
import FontSize from '@/components/mdx-components/FontSize';
import Underline from '@/components/mdx-components/Underline';
import Heading from '@/components/mdx-components/Heading';
import BulletList from '@/components/mdx-components/BulletList';
import OrderedList from '@/components/mdx-components/OrderedList';
import ListItem from '@/components/mdx-components/ListItem';
import Blockquote from '@/components/mdx-components/Blockquote';
import Align from '@/components/mdx-components/Align';
import HorizontalRule from '@/components/mdx-components/HorizontalRule';


type Frontmatter = {
  title: string;
  description?: string;
  coverImage?: string;
  tag?: string;
  date?: string;
  author?: string;
};

export default async function BlogSection() {
  const components = {
    Underline,
    FontSize,
    Color,
    Heading,
    BulletList,
    OrderedList,
    ListItem,
    Blockquote,
    Align,
    HorizontalRule,
  };
  const client = await clientPromise;
  const db = client.db('Blog');

  // Fetch all posts
  const rawPosts = await db.collection('Posts').find({}).toArray();

  // Extract metadata (frontmatter) from each post
  const posts = await Promise.all(
    rawPosts.map(async (post) => {
    const { frontmatter } = await compileMDX<Frontmatter>({
      source: post.content,
      options: { parseFrontmatter: true },
      components,
    });

      return {
        slug: post.slug, // assuming you have a slug field
        ...frontmatter,
      };
    })
  );

  return (
    <CWrapper>
      <div>
        {/* <Heading
          title="Latest Updates & Stories"
          subtitle="Read inspiring stories, rescue operations, and important updates from Spandan’s journey in animal welfare."
        /> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 auto-rows-[200px] md:auto-rows-[200px] gap-6 mb-16">
          {posts.map((post, index) => {
            const isFeatured = index % 4 === 0;
            const colSpan = isFeatured ? 'md:col-span-3' : 'md:col-span-2';
            const rowSpan = isFeatured ? 'md:row-span-3' : 'md:row-span-1';

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`relative group bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden ${colSpan} ${rowSpan}`}
              >
                <Image
                  src={post.coverImage || '/images/default.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                  {post.tag?.split(',').map((tag: string) => (
                    <span
                      key={tag.trim()}
                      className="text-sm mr-2 text-teal-300 hover:text-teal-200 font-medium"
                    >
                      #{tag.trim()}
                    </span>
                  ))}
                  <h3 className="mt-1 font-bold text-lg">{post.title}</h3>
                  {isFeatured && (
                    <p className="text-sm mt-1 line-clamp-3">{post.description}</p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </CWrapper>
  );
}

