import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { connectToSpandanDB } from '@/lib/connectToSpandanDB';
import { RescueRequest } from '@/models/RescueRequest';
import cloudinary from '@/lib/cloudinary';

export async function POST(req: NextRequest) {
  try {
    await connectToSpandanDB();
    const token = await getToken({ req });

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const location = formData.get('location')?.toString();
    const description = formData.get('description')?.toString();
    const phone = formData.get('phone')?.toString();

    if (!location || !description || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let mediaUrl = '';
    const stream = require('stream');

    if (file && file instanceof File) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      // Upload to Cloudinary
      mediaUrl = await new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: 'auto', folder: 'spandan/rescue-media' },
          (error, result) => {
            if (error || !result) return reject(error || new Error("Upload failed"));
            resolve(result.secure_url);
          }
        );

        const bufferStream = new stream.PassThrough();
        bufferStream.end(buffer);
        bufferStream.pipe(uploadStream);
      });

    }

    const newRequest = await RescueRequest.create({
      userId: token.id,
      name: token.name,
      email: token.email,
      phone,
      location,
      description,
      mediaUrl,
    });

    return NextResponse.json({ success: true, request: newRequest });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Server error', details: err.message }, { status: 500 });
  }
}