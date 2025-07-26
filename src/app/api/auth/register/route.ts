import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
// import { connectToDB } from '@/lib/connectToDB';
import {connectToSpandanDB} from '@/lib/connectToSpandanDB'; // Adjust import based on your structure
// import User from '@/models/User';
import { getUserModel } from '@/models/User'; // Adjust import based on your structure
import bcrypt from 'bcryptjs'; // Add this
// import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const profileImage = formData.get('profileImage') as File;

    if (!name || !email || !password || !profileImage) {
      return NextResponse.json({ message: 'All fields required' }, { status: 400 });
    }

    // await connectToDB('AuthDB');
    await connectToSpandanDB();

    // const existingUser = await User.findOne({ email });
    const User = await getUserModel(); // await the model
    const existingUser = await User.findOne({ email: email.trim().toLowerCase() });
    if (existingUser) {
      return NextResponse.json({ message: 'Email already registered' }, { status: 400 });
    }

    // Save image
    const bytes = await profileImage.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}-${profileImage.name}`;
    const uploadPath = path.join(process.cwd(), 'public', 'uploads', filename);

    await writeFile(uploadPath, buffer);

    const hashedPassword = await bcrypt.hash(password, 10);
    // const token = crypto.randomBytes(32).toString('hex');
    // const verificationToken = token;
    // const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      image: `/uploads/${filename}`, // rename `profileImage` -> `image`
      // verificationToken: verificationToken,
      // verificationTokenExpires: verificationTokenExpires,
      provider: 'credentials',       // match Google schema
    });

    await newUser.save();

    return NextResponse.json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
