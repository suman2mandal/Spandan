// // components/BlogPost.tsx

// 'use client';

// export default function BlogPost() {
//   return (
//     <div className="max-w-screen-xl mx-auto px-4 sm:px-10 md:px-16 py-10 relative">
//       {/* Header Image */}
//       <div className="overflow-hidden rounded-lg shadow-lg">
//         <Image
//           src="https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1"
//           alt="Blog Hero"
//           width={1200}
//           height={500}
//           className="object-cover w-full h-96"
//           priority
//         />
//       </div>

//       {/* Blog Card */}
//       <div className="max-w-3xl mx-auto -mt-32 z-10 relative">
//         <div className="bg-white shadow-xl rounded-lg p-6 sm:p-10">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//             Revenge of the Never Trumpers
//           </h1>

//           <p className="text-sm text-gray-600 mb-2">
//             Written By:{' '}
//             <Link href="#" className="text-teal-600 hover:text-teal-800 font-semibold">
//               Ahmad Sultani
//             </Link>{' '}
//             in{' '}
//             <Link href="#" className="text-teal-600 hover:text-teal-800 text-sm">
//               Election
//             </Link>
//             ,{' '}
//             <Link href="#" className="text-teal-600 hover:text-teal-800 text-sm">
//               Politics
//             </Link>
//           </p>

//           <div className="text-gray-700 leading-relaxed space-y-6 mt-6 text-base">
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
//               has been the industry&apos;s standard dummy text ever since the 1500s...
//             </p>

//             <h3 className="text-2xl font-semibold">#1. What is Lorem Ipsum?</h3>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has
//               survived not only five centuries, but also the leap into electronic typesetting...
//             </p>

//             <blockquote className="border-l-4 border-teal-500 pl-4 italic text-teal-700">
//               &apos;Lorem Ipsum is simply dummy text of the printing and typesetting industry...&apos;
//             </blockquote>

//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was
//               popularised in the 1960s with the release of Letraset sheets...
//             </p>
//           </div>

//           {/* Tags */}
//           <div className="mt-6 space-x-3">
//             {['#Election', '#People', '#Election2020', '#Trump', '#Joe'].map((tag) => (
//               <Link
//                 key={tag}
//                 href="#"
//                 className="text-sm text-teal-600 hover:text-teal-800 font-medium"
//               >
//                 {tag}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { compileMDX } from '@/lib/compile-mdx';
// import { getPostBySlug } from '@/lib/posts';

// export default async function BlogPostPage({ params }: { params: { slug?: string } }) {
//   if (!params?.slug) {
//     throw new Error('Slug not found in params');
//   }

//   const post = getPostBySlug('blog', params.slug); // assumes { content, data } structure
//   const MDXContent = await compileMDX(post.content);

//   return (
//     <main className="prose max-w-3xl mx-auto py-10">
//       <h1>{post.data.title}</h1>
//       <p className="text-sm text-gray-500">{post.data.date}</p>
//       <MDXContent />
//       {/* {post.content} */}
//     </main>
//   );
// }


// import { GetStaticProps } from 'next';
// import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
// import { serialize } from 'next-mdx-remote/serialize';
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import Alert from '@/components/Alert';

// const components = { Alert };

// interface Props {
//   mdxSource: MDXRemoteSerializeResult;
// }

// export default function MdxTestPage({ mdxSource }: Props) {
//   return (
//     <div className="p-6 max-w-xl mx-auto prose">
//       <MDXRemote {...mdxSource} components={components} />
//     </div>
//   );
// }

import Image from 'next/image';
import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';
import fs from 'fs/promises';
import path from 'path';

type Frontmatter = {
  title: string;
  date?: string;
  author?: string;
  description: string;
  coverImage: string;
  tag: string;
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
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 md:px-16 py-10 relative">
       <div className="overflow-hidden rounded-lg shadow-lg">
         <Image
          src={frontmatter.coverImage}
          alt="Blog Hero"
          width={1800}
          height={500}
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
            {/* ,{' '}
            <Link href="#" className="text-teal-600 hover:text-teal-800 text-sm">
              Politics
            </Link> */}
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
  );
}
