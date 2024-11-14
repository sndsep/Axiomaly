// src/middleware.ts

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    // Allow all API routes to pass through
    if (pathname.startsWith('/api/')) {
      return NextResponse.next();
    }

    // If authenticated users try to access auth pages, redirect to dashboard
    if (token && (pathname === '/login' || pathname === '/register')) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // Add security headers
    const response = NextResponse.next();
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    return response;
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;
        
        // Public routes that don't require authentication
        if (pathname === '/' || 
            pathname === '/login' || 
            pathname === '/register' ||
            pathname.startsWith('/api/auth')) {
          return true;
        }

        // All other routes require authentication
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all routes except:
     * 1. /api routes that don't require auth
     * 2. /_next (static files)
     * 3. /favicon.ico, /images, etc.
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};