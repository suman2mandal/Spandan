import { NextRequest, NextResponse } from 'next/server';
import {connectToSpandanDB} from '@/lib/connectToSpandanDB';
import BlogPost from '@/models/BlogPost';

export async function POST(req: NextRequest) {
  try {
    const { slug, content } = await req.json();

    console.log('Received slug:', slug);
    console.log('Received content length:', content.length);
    if (!slug || !content) {
      return NextResponse.json({ error: 'Missing slug or content' }, { status: 400 });
    }

    await connectToSpandanDB();

    await BlogPost.create({
      slug,
      content,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Post saved successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error saving blog post:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
