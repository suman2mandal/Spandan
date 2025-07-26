import { connectToSpandanDB } from '@/lib/connectToSpandanDB';
import BlogPost from '@/models/BlogPost';

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    await connectToSpandanDB();
    const { slug } = await context.params; // ✅ Await before using
    const decodedSlug = decodeURIComponent(slug);
    const post = await BlogPost.findOne({ slug: decodedSlug });

    if (!post) {
      return new Response(JSON.stringify({ error: 'Post not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(post), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error fetching post:', err);
    return new Response(JSON.stringify({ error: 'Failed to fetch blog post' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
