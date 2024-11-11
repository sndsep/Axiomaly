// src/middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Public paths that don't need checks
    const publicPaths = ['/login', '/register'];
    if (publicPaths.includes(path)) {
      return NextResponse.next();
    }

    // If user is authenticated but hasn't completed onboarding
    if (token && !token.user?.hasCompletedOnboarding) {
      // If already on an onboarding page, allow access
      if (path.startsWith('/onboarding')) {
        return NextResponse.next();
      }
      // Otherwise redirect to career path selection
      return NextResponse.redirect(new URL('/onboarding/career-path', req.url));
    }

    // If user is authenticated and has completed onboarding
    if (token && token.user?.hasCompletedOnboarding) {
      // If trying to access onboarding pages, redirect to dashboard
      if (path.startsWith('/onboarding')) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};