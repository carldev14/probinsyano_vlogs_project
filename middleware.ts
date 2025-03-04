import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // Get the session token from the request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If the user is not authenticated and tries to access protected routes, redirect to login page
  if (!token && req.nextUrl.pathname.startsWith('/protected-feature')) {
    return NextResponse.redirect(new URL('/admin', req.url)); // Redirect to login page
  }

  // If the user is authenticated and tries to access the login page or public pages, allow access
  if (token && req.nextUrl.pathname === '/admin') {
    return NextResponse.redirect(new URL('/', req.url)); // Redirect authenticated users away from login page
  }

  // If the user is authenticated and accessing a protected route, allow access
  return NextResponse.next();
}

// Configure the matcher to apply middleware to protected routes and login page
export const config = { 
  matcher: ['/protected-features/:path*', '/admin'] 
};
