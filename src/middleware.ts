// src/middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequestWithAuth } from "next-auth/middleware";
import { OnboardingStep, CareerPath } from "@prisma/client";

const ONBOARDING_FLOWS = {
  [CareerPath.SHORT_COURSE]: {
    [OnboardingStep.CAREER_PATH]: '/onboarding/career-path',
    [OnboardingStep.SURVEY]: '/onboarding/short-course/survey',
    [OnboardingStep.RECOMMENDATIONS]: '/onboarding/short-course/recommendations',
    [OnboardingStep.PROFILE]: '/onboarding/profile',
    [OnboardingStep.TOUR]: '/onboarding/tour',
    [OnboardingStep.COMPLETED]: '/dashboard'
  },
  [CareerPath.DEGREE_PROGRAM]: {
    [OnboardingStep.CAREER_PATH]: '/onboarding/career-path',
    [OnboardingStep.SURVEY]: '/onboarding/degree-program/survey',
    [OnboardingStep.RECOMMENDATIONS]: '/onboarding/degree-program/curriculum',
    [OnboardingStep.PROFILE]: '/onboarding/profile',
    [OnboardingStep.TOUR]: '/onboarding/tour',
    [OnboardingStep.COMPLETED]: '/dashboard'
  }
} as const;

// Get the next step in the onboarding flow
function getNextStep(currentStep: OnboardingStep, careerPath: CareerPath): string {
  const flow = ONBOARDING_FLOWS[careerPath];
  const steps = Object.values(OnboardingStep);
  const currentIndex = steps.indexOf(currentStep);
  const nextStep = steps[currentIndex + 1];
  
  return flow[nextStep] || '/dashboard';
}

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const path = req.nextUrl.pathname;
    const token = req.nextauth.token;

    // Handle onboarding flow
    if (path.startsWith('/onboarding/')) {
      // Authentication check
      if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
      }

      // Redirect completed onboarding to dashboard
      if (token.hasCompletedOnboarding) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }

      // Allow access to career path selection if not yet selected
      if (path === '/onboarding/career-path' && !token.careerPath) {
        return NextResponse.next();
      }

      // Ensure career path is selected before accessing other onboarding steps
      if (!token.careerPath) {
        return NextResponse.redirect(new URL('/onboarding/career-path', req.url));
      }

      // Get current onboarding flow based on career path
      const currentFlow = ONBOARDING_FLOWS[token.careerPath as CareerPath];

      // Find current step in the flow
      const currentStepEntry = Object.entries(currentFlow).find(([_, routePath]) => 
        path.startsWith(routePath)
      );

      if (!currentStepEntry) {
        // If path is not in flow, redirect to appropriate step
        return NextResponse.redirect(
          new URL(currentFlow[token.currentStep as OnboardingStep] || '/onboarding/career-path', req.url)
        );
      }

      // Allow proceeding to current step
      return NextResponse.next();
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

    // Handle auth pages (login/register)
    if (token && (path.startsWith('/login') || path.startsWith('/register'))) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;
        
        // Public paths that don't require authentication
        const publicPaths = [
          '/',
          '/login',
          '/register',
          '/public',
          '/_next',
          '/api/auth'
        ];

        if (publicPaths.some(route => path.startsWith(route))) {
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