// src/middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const path = req.nextUrl.pathname;
    const token = req.nextauth.token;

    // If user is authenticated and trying to access auth pages, redirect to dashboard
    if (token && (path.startsWith('/login') || path.startsWith('/register'))) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // Allow users to proceed during onboarding
    if (path.startsWith('/onboarding/')) {
      if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
      }
      return NextResponse.next();
    }

    // Protect dashboard routes
    if (path.startsWith('/dashboard/')) {
      if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
      }
      return NextResponse.next();
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;
        
        // Public paths that don't require authentication
        if (
          path === '/' || 
          path.startsWith('/login') || 
          path.startsWith('/register') ||
          path.startsWith('/public')
        ) {
          return true;
        }

        // All other paths require authentication
        return !!token;
      },
    },
    pages: {
      signIn: '/login',
      error: '/error',
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};