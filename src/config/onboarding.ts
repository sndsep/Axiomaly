// src/config/onboarding.ts

import { OnboardingStep, CareerPathType } from '@/types/onboarding';

export const ONBOARDING_STEPS = [
  OnboardingStep.CAREER_PATH,
  OnboardingStep.SURVEY,
  OnboardingStep.RECOMMENDATIONS,
  OnboardingStep.PROFILE,
  OnboardingStep.TOUR,
  OnboardingStep.COMPLETED
] as const;

export function getStepPath(step: OnboardingStep, careerPath?: CareerPathType): string {
  switch (step) {
    case OnboardingStep.CAREER_PATH:
      return '/onboarding/career-path';
    case OnboardingStep.SURVEY:
      return careerPath === 'SHORT_COURSE' 
        ? '/onboarding/short-course/survey'
        : '/onboarding/degree-program/survey';
    case OnboardingStep.RECOMMENDATIONS:
      return careerPath === 'SHORT_COURSE'
        ? '/onboarding/short-course/recommendations'
        : '/onboarding/degree-program/curriculum';
    case OnboardingStep.PROFILE:
      return '/onboarding/profile';
    case OnboardingStep.TOUR:
      return '/onboarding/tour';
    case OnboardingStep.COMPLETED:
      return '/dashboard';
    default:
      return '/dashboard';
  }
}

export function getNextStep(currentStep: OnboardingStep): OnboardingStep {
  const currentIndex = ONBOARDING_STEPS.indexOf(currentStep);
  const nextIndex = Math.min(currentIndex + 1, ONBOARDING_STEPS.length - 1);
  return ONBOARDING_STEPS[nextIndex];
}

export function getPreviousStep(currentStep: OnboardingStep): OnboardingStep {
  const currentIndex = ONBOARDING_STEPS.indexOf(currentStep);
  const previousIndex = Math.max(currentIndex - 1, 0);
  return ONBOARDING_STEPS[previousIndex];
}

export const STEP_CONFIG = {
  [OnboardingStep.CAREER_PATH]: {
    title: 'Career Path',
    description: 'Choose your learning journey',
  },
  [OnboardingStep.SURVEY]: {
    title: 'Survey',
    description: 'Tell us about yourself',
  },
  [OnboardingStep.RECOMMENDATIONS]: {
    title: 'Recommendations',
    description: 'Explore personalized courses',
  },
  [OnboardingStep.PROFILE]: {
    title: 'Profile',
    description: 'Complete your profile',
  },
  [OnboardingStep.TOUR]: {
    title: 'Tour',
    description: 'Get to know the platform',
  },
  [OnboardingStep.COMPLETED]: {
    title: 'Completed',
    description: 'Start your learning journey',
  },
} as const;

export function isLastStep(step: OnboardingStep): boolean {
  return step === OnboardingStep.COMPLETED;
}

export function isFirstStep(step: OnboardingStep): boolean {
  return step === OnboardingStep.CAREER_PATH;
}

export function getStepInfo(step: OnboardingStep) {
  return STEP_CONFIG[step];
}