import { connectToSpandanDB } from '@/lib/connectToSpandanDB';
import BlogPost from '@/models/BlogPost';

export async function DELETE(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    await connectToSpandanDB();
    const { slug } = await context.params;
    const decodedSlug = decodeURIComponent(slug);

    const deletedPost = await BlogPost.findOneAndDelete({ slug: decodedSlug });

    if (!deletedPost) {
      return new Response(JSON.stringify({ error: 'Post not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      message: '✅ Blog post deleted successfully',
      deletedPost,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('❌ Error deleting blog post:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
