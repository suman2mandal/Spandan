// app/api/animal-law/route.ts
import { connectToDB } from '@/lib/connectToDB';
import { AnimalLaw } from '@/models/AnimalLaw';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDB('Animal-Law');
    const laws = await AnimalLaw.find({});
    return NextResponse.json(laws);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch laws' }, { status: 500 });
  }
}
