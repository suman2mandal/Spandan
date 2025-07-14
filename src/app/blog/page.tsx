import CWrapper from '@/components/wrappers/component-wrapper';
import Heading from '@/components/wrappers/Header';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function BlogSection() {
  const posts = getAllPosts('blog');
  if (!posts || posts.length === 0) return null;

  return (
    <CWrapper>
      <div>
        <Heading
          title="Latest Updates & Stories"
          subtitle="Read inspiring stories, rescue operations, and important updates from Spandan’s journey in animal welfare."
        />

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




// import CWrapper from '@/components/wrappers/component-wrapper';
// import Heading from '@/components/wrappers/Header';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function BlogSection() {
//   const featuredPost = {
//     title: 'Brave Pup Saved from Highway Chaos',
//     img: '/images/blog-feature.jpg',
//     tag: 'Rescue',
//     href: '/blog/brave-pup-rescue',
//     desc: 'Our volunteers rushed to save a dog injured in a hit-and-run. Here’s how Spandan turned the situation around.',
//   };

//   const smallPosts = [
//     {
//       title: 'Monsoon Feeding Drive in Rural Bengal',
//       img: '/images/blog1.jpg',
//       tag: 'Community',
//       href: '/blog/monsoon-feeding-drive',
//     },
//     {
//       title: 'Volunteer Spotlight: A Hero Among Us',
//       img: '/images/blog2.jpg',
//       tag: 'Team',
//       href: '/blog/volunteer-hero',
//     },
//     {
//       title: 'What to Do if You See an Injured Dog',
//       img: '/images/blog3.jpg',
//       tag: 'Awareness',
//       href: '/blog/injured-dog-help',
//     },
//   ];

//   return (
//     <CWrapper>
//       <div>
//         <Heading
//           title="Latest Updates & Stories"
//           subtitle="Read inspiring stories, rescue operations, and important updates from Spandan’s journey in animal welfare."
//         />
//         {/* <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-5xl  font-bold text-teal-800 font-raleway">Latest Updates & Stories</h2>
//           <p className="mt-4 text-teal-700 md:text-5xltext-lg max-w-4xl mx-auto">
//             Read inspiring stories, rescue operations, and important updates from Spandan’s journey in animal welfare. 
//           </p>
//         </div> */}
        

//         {/* Flex layout for blog cards */}
//         <div className="flex flex-col lg:flex-row gap-8 mb-16">
//           {/* Left: Featured Blog */}
//           <Link
//             href={featuredPost.href}
//             className="block group bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden w-full lg:w-2/3"
//           >
//             <div className="relative h-80 w-full">
//               <Image
//                 src={featuredPost.img}
//                 alt={featuredPost.title}
//                 fill
//                 className="object-cover transition duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-6">
//               <span className="text-xs text-teal-600 uppercase font-semibold">{featuredPost.tag}</span>
//               <h3 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-teal-700">{featuredPost.title}</h3>
//               <p className="mt-2 text-gray-600">{featuredPost.desc}</p>
//             </div>
//           </Link>

//           {/* Right: Smaller Blogs */}
//           <div className="flex flex-col gap-6 w-full lg:w-1/3">
//             {smallPosts.map((post, idx) => (
//               <Link
//                 href={post.href}
//                 key={idx}
//                 className="block group bg-white rounded-lg shadow hover:shadow-md transition-all overflow-hidden"
//               >
//                 <div className="relative h-40 w-full">
//                   <Image
//                     src={post.img}
//                     alt={post.title}
//                     fill
//                     className="object-cover group-hover:scale-105 transition duration-300"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <span className="text-xs text-teal-600 uppercase font-semibold">{post.tag}</span>
//                   <h4 className="mt-1 font-semibold text-lg text-gray-900 group-hover:text-teal-700">
//                     {post.title}
//                   </h4>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </CWrapper>
//   );
// }


// import { getAllPosts } from '@/lib/posts';
// import { getAllPosts } from '@/lib/posts';
// import Link from 'next/link';

// export default function BlogIndexPage() {
//   const posts = getAllPosts('blog');

//   return (
//     <main className="max-w-5xl mx-auto px-4 py-10">
//       <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
//       <div className="grid md:grid-cols-2 gap-6">
//         {posts.map((post) => (
//           <Link key={post.slug} href={`/blog/${post.slug}`} className="p-4 border rounded hover:shadow-md transition">
//             <h2 className="text-2xl font-semibold">{post.title}</h2>
//             <p className="text-sm text-gray-500">{post.date}</p>
//             <p className="mt-2 text-gray-700">{post.description}</p>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }




// 'use client';

// import React from 'react';
// import { MDXProvider } from '@mdx-js/react';

// function Alert({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="border-l-4 border-yellow-500 bg-yellow-100 text-yellow-800 p-4 rounded my-4">
//       {children}
//     </div>
//   );
// }

// const components = { Alert };

// const MDXContent = () => (
//   <>
//     <h2 className="text-2xl font-bold mb-2">Welcome to Our Blog</h2>
//     <p className="mb-4">
//       This is a post written using <strong>MDX</strong>, where you can add components and markdown together.
//     </p>
//     <Alert>This is a reusable component inside MDX!</Alert>
//   </>
// );

// export default function Page() {
//   return (
//     <MDXProvider components={components}>
//       <div className="p-6 max-w-xl mx-auto">
//         <MDXContent />
//       </div>
//     </MDXProvider>
//   );
// }



// src/pages/mdx-test.tsx
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

// export const getStaticProps: GetStaticProps = async () => {
//   const filePath = path.join(process.cwd(), 'content/blog', 'first-post.mdx');
//   const rawContent = fs.readFileSync(filePath, 'utf8');
//   const { content } = matter(rawContent);
//   const mdxSource = await serialize(content);

//   return {
//     props: {
//       mdxSource,
//     },
//   };
// };
