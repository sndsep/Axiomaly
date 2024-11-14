// src/middleware.ts

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    // Always allow API routes
    if (pathname.startsWith('/api/')) {
      return NextResponse.next();
    }

    // Check if user is authenticated but hasn't completed onboarding
    if (token && 
        !token.hasCompletedOnboarding && 
        !pathname.startsWith('/onboarding') && 
        pathname !== '/login' && 
        pathname !== '/register') {
      return NextResponse.redirect(new URL('/onboarding/career-path', req.url));
    }

    // If user has completed onboarding, don't allow access to onboarding pages
    if (token && 
        token.hasCompletedOnboarding && 
        pathname.startsWith('/onboarding')) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
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