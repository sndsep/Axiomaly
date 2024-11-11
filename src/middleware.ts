// src/middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequestWithAuth } from "next-auth/middleware";

const publicPaths = [
  '/',
  '/login',
  '/register',
  '/about',
  '/pricing',
  '/contact',
  '/public'
];

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const { pathname } = req.nextUrl;
    
    // Always allow public paths
    if (publicPaths.some(path => pathname.startsWith(path))) {
      return NextResponse.next();
    }

    // Get the token from the session
    const token = req.nextauth.token;

    // Protected routes logic
    if (token) {
      // If authenticated but not completed onboarding, redirect to onboarding
      // except when already on onboarding paths
      if (!token.hasCompletedOnboarding && !pathname.startsWith('/onboarding')) {
        return NextResponse.redirect(new URL('/onboarding/career-path', req.url));
      }

      // If trying to access auth pages while logged in
      if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
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
        
        // Allow access to public paths without authentication
        if (publicPaths.some(path => pathname.startsWith(path))) {
          return true;
        }
        
        // Require authentication for all other paths
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    // Match all paths except static assets and API routes
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};