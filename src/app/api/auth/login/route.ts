import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import {getUserModel} from '@/models/User';
// import {connectToDB} from '@/lib/connectToDB';
import {connectToSpandanDB} from '@/lib/connectToSpandanDB';
import { signJWT } from '@/utils/jwt';

export async function POST(req: Request) {
  try {
    // await connectToDB('AuthDB');
    await connectToSpandanDB();
    const { email, password } = await req.json();
    console.log('Login attempt:.............', { email });
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    const User = await getUserModel(); // await the model
    const user = await User.findOne({ email });

    if (!user || !user.password) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // Generate JWT
    const token = signJWT({ email: user.email, id: user._id });

    // ✅ Manually set cookie using headers
    const response = NextResponse.json({
      message: 'Login successful',
      user: {
        email: user.email,
        name: user.name,
        id: user._id,
      },
    });

    response.headers.set(
      'Set-Cookie',
      `token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24 * 7}; SameSite=Strict; ${
        process.env.NODE_ENV === 'production' ? 'Secure;' : ''
      }`
    );

    return response;
  } catch (error) {
    console.error('[LOGIN_ERROR]', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
