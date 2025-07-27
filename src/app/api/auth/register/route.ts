import { NextRequest, NextResponse } from 'next/server';
import {connectToSpandanDB} from '@/lib/connectToSpandanDB';
import { getUserModel } from '@/models/User';
import bcrypt from 'bcryptjs';
import cloudinary from '@/lib/cloudinary';

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
    // ⬇️ Convert image to base64 string (buffer upload)
    const bytes = await profileImage.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const base64Image = `data:${profileImage.type};base64,${buffer.toString('base64')}`;

    // ⬆️ Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(base64Image, {
      folder: 'spandan-profile-images',
    });


    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      image: uploadResult.secure_url,
      provider: 'credentials',
    });

    await newUser.save();

    return NextResponse.json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
