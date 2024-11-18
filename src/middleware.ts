// src/middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const path = req.nextUrl.pathname;
    const token = req.nextauth.token;

    // Public paths are handled in the callback

    // Handle onboarding flow
    if (path.startsWith('/onboarding/')) {
      if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
      }

      // If onboarding is completed, redirect to dashboard
      if (token.hasCompletedOnboarding) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }

      // Handle career path based redirections
      if (path === '/onboarding/career-path' && token.careerPath) {
        const surveyPath = token.careerPath === 'SHORT_COURSE'
          ? '/onboarding/short-course/survey'
          : '/onboarding/degree-program/survey';
        return NextResponse.redirect(new URL(surveyPath, req.url));
      }

      // Verify proper onboarding flow
      if (token.careerPath === 'SHORT_COURSE' && path.startsWith('/onboarding/degree-program')) {
        return NextResponse.redirect(new URL('/onboarding/short-course/survey', req.url));
      }

      if (token.careerPath === 'DEGREE_PROGRAM' && path.startsWith('/onboarding/short-course')) {
        return NextResponse.redirect(new URL('/onboarding/degree-program/survey', req.url));
      }

      return NextResponse.next();
    }

    // Handle auth pages (login/register)
    if (token && (path.startsWith('/login') || path.startsWith('/register'))) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // Handle dashboard access
    if (path.startsWith('/dashboard')) {
      if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
      }

      if (!token.hasCompletedOnboarding) {
        return NextResponse.redirect(new URL('/onboarding/career-path', req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;
        
        if (
          path === '/' || 
          path.startsWith('/login') || 
          path.startsWith('/register') ||
          path.startsWith('/public') ||
          path.startsWith('/_next') ||
          path.startsWith('/api/auth')
        ) {
          return true;
        }

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
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};