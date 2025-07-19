import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJWT } from '@/utils/jwt';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  // Redirect to login if no token is found
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  try {
    // Attempt to verify the token
    verifyJWT(token);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect('/auth/login');
  }
}

// Apply middleware to all routes under /protected
export const config = {
  matcher: ['/protected/:path*'],
};
