import { connectToSpandanDB } from '@/lib/connectToSpandanDB';
import BlogPost from '@/models/BlogPost';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToSpandanDB();
    console.log('✅ Connected to Spandan DB for Blog Posts');

    const posts = await BlogPost.find({});
    return NextResponse.json(posts);
  } catch (error) {
    console.error('❌ Failed to fetch blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}
