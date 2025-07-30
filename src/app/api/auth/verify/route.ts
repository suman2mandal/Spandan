import { verifyEmailToken } from '@/utils/jwt';
import {connectToSpandanDB} from '@/lib/connectToSpandanDB';
import {getUserModel} from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  await connectToSpandanDB();

  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');

  if (!token) return Response.json({ error: 'Missing token' }, { status: 400 });

  try {
    const { name, email, password, uploadResult } = verifyEmailToken(token) as {
      name: string;
      email: string;
      password: string;
      uploadResult?: { secure_url: string };
    };

    const User = await getUserModel();
    const userExists = await User.findOne({ email });
    if (userExists) {
      return Response.json({ error: 'User already verified' }, { status: 400 });
    }

    const imageUrl = uploadResult?.secure_url || '';
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        name,
        email,
        image: imageUrl, // ✅ store image in DB
        password: hashedPassword,
    });

    await newUser.save();
    
    return NextResponse.redirect(new URL('/auth/login', req.url));
  } catch{
    return Response.json({ error: 'Invalid or expired token' }, { status: 400 });
  }
}
