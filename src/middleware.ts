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
    const path = req.nextUrl.pathname
    const token = req.nextauth.token

    if (path.startsWith('/onboarding/')) {
      if (path === '/onboarding/career-path') {
        return NextResponse.next()
          // Start of Selection
          }

          const currentStep = (token?.user as { onboardingProgress?: { currentStep?: string }, careerPath?: string })?.onboardingProgress?.currentStep
          const careerPath = (token?.user as { careerPath?: string })?.careerPath

          if (currentStep === 'SURVEY') {
            const correctPath = careerPath === 'SHORT_COURSE'
          ? '/onboarding/short-course/survey'
          : '/onboarding/degree-program/survey'

        if (path !== correctPath) {
          return NextResponse.redirect(new URL(correctPath, req.url))
        }
      }
    }

    return NextResponse.next()
  }
)

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|uploads|login|register|auth).*)',
  ],
};