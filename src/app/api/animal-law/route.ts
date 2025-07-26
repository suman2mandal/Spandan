import {connectToSpandanDB} from '@/lib/connectToSpandanDB';
import AnimalLaw from '@/models/AnimalLaw';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToSpandanDB();
    console.log("✅ Connected to Spandan DB for Animal Law"); // Calling every time fix it
    const laws = await AnimalLaw.find({});
    return NextResponse.json(laws);
  } catch (error) {
    console.error('❌ Failed to fetch laws:', error);
    return NextResponse.json({ error: 'Failed to fetch laws' }, { status: 500 });
  }
}
