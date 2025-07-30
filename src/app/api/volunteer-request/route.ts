// app/api/volunteer-request/route.ts
import { NextRequest,NextResponse } from 'next/server';
import { connectToSpandanDB } from '@/lib/connectToSpandanDB';
import { Volunteer } from '@/models/Volunteer';
import cloudinary from '@/lib/cloudinary';
import { getToken } from 'next-auth/jwt';
import { PassThrough } from 'stream';

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    await connectToSpandanDB();

    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    const phone = formData.get('phone')?.toString() || '';
    const location = formData.get('location')?.toString() || '';
    const areaOfInterest = formData.get('areaOfInterest')?.toString() || '';
    const availability = formData.get('availability')?.toString() || '';
    const whyVolunteer = formData.get('whyVolunteer')?.toString() || '';

    let mediaUrl = '';

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());

      // Upload to Cloudinary
      mediaUrl = await new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: 'auto', folder: 'spandan/volunteer-media' },
          (error, result) => {
            if (error || !result) return reject(error || new Error("Upload failed"));
            resolve(result.secure_url);
          }
        );

        const bufferStream = new PassThrough();
        bufferStream.end(buffer);
        bufferStream.pipe(uploadStream);
      });
    }

    const newVolunteer = await Volunteer.create({
      userId: token.id,
      name: token.name,
      email: token.email,
      phone,
      areaOfInterest,
      location,
      availability,
      whyVolunteer,
      mediaUrl,
    });

    return NextResponse.json({ message: 'Volunteer request submitted successfully', data: newVolunteer });
  } catch (error: unknown) {
    console.error('Volunteer form error:', error);
    const message = error instanceof Error ? error.message : 'Something went wrong';
    return NextResponse.json({ message }, { status: 500 });
  }
}
