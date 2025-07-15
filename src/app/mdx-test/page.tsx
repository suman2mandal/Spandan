import { MDXRemote } from 'next-mdx-remote/rsc';
import clientPromise from '@/lib/mongodb';
import { notFound } from 'next/navigation';


export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const client = await clientPromise;
  const db = client.db('Blog');
  const { slug } = await params;
  const post = await db.collection('Post').findOne({ slug: slug });

  if (!post) return notFound();

  return (
    <article className="prose mx-auto p-4">
      <h1 className="mb-4">{post.title}</h1>
      <MDXRemote source={post.content} />
    </article>
  );
}


// export default function BlogPost(){
//   return (
//     <>
//     hi
//     </>
//   );
// }