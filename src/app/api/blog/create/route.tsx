import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    const { slug, content } = await req.json();

    if (!slug || !content) {
      return NextResponse.json({ error: 'Missing title or content' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('Blog'); // Replace with your DB name
    const posts = db.collection('Posts');

    await posts.insertOne({
      slug,
      content,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Post saved successfully' }, { status: 200 });
  } catch (err) {
    console.error('Error saving blog post:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
