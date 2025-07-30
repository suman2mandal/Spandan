import { NextRequest, NextResponse } from 'next/server';
import {connectToSpandanDB} from '@/lib/connectToSpandanDB';
import { getUserModel } from '@/models/User';
import { generateEmailToken } from '@/utils/jwt';
import { sendVerificationEmail } from '@/lib/sendEmail';
import cloudinary from '@/lib/cloudinary';

export async function POST(req: NextRequest) {

  await connectToSpandanDB();
  
  const formData = await req.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const profileImage = formData.get('profileImage') as File;

  if (!name || !email || !password || !profileImage) {
    return NextResponse.json({ message: 'All fields required' }, { status: 400 });
  }

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
    const uploadResult = await cloudinary.uploader.upload(base64Image, {
      folder: 'spandan-profile-images',
    });


  const token = generateEmailToken({ name, email, password, uploadResult });

  try {
    await sendVerificationEmail(email, token);
    return Response.json({ success: true, message: 'Verification email sent' });
  } catch {
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
