// src/lib/constants/onboarding.ts
import { CareerPath, OnboardingStep } from '@prisma/client';

export const CAREER_PATHS = {
  SHORT_COURSE: 'SHORT_COURSE',
  DEGREE_PROGRAM: 'DEGREE_PROGRAM'
} as const satisfies Record<string, CareerPath>;

export const ONBOARDING_STEPS = {
  CAREER_PATH: 'CAREER_PATH',
  INTERESTS: 'INTERESTS',
  EXPERIENCE: 'EXPERIENCE',
  GOALS: 'GOALS',
  SCHEDULE: 'SCHEDULE',
  BACKGROUND: 'BACKGROUND',
  PORTFOLIO: 'PORTFOLIO',
  MENTORSHIP: 'MENTORSHIP',
  RECOMMENDATIONS: 'RECOMMENDATIONS'
} as const satisfies Record<string, OnboardingStep>;

export const SHORT_COURSE_STEPS = [
  {
    id: ONBOARDING_STEPS.CAREER_PATH,
    title: 'Choose Path',
    description: 'Select your learning journey'
  },
  {
    id: ONBOARDING_STEPS.INTERESTS,
    title: 'Interests',
    description: 'Tell us what you want to learn'
  },
  {
    id: ONBOARDING_STEPS.EXPERIENCE,
    title: 'Experience',
    description: 'Share your current skill level'
  },
  {
    id: ONBOARDING_STEPS.GOALS,
    title: 'Goals',
    description: 'Define your learning objectives'
  },
  {
    id: ONBOARDING_STEPS.SCHEDULE,
    title: 'Schedule',
    description: 'Set your learning pace'
  }
] as const;

export const DEGREE_PROGRAM_STEPS = [
  {
    id: ONBOARDING_STEPS.CAREER_PATH,
    title: 'Choose Path',
    description: 'Select your learning journey'
  },
  {
    id: ONBOARDING_STEPS.BACKGROUND,
    title: 'Background',
    description: 'Tell us about your experience'
  },
  {
    id: ONBOARDING_STEPS.INTERESTS,
    title: 'Specialization',
    description: 'Choose your focus areas'
  },
  {
    id: ONBOARDING_STEPS.PORTFOLIO,
    title: 'Portfolio',
    description: 'Share your previous work'
  },
  {
    id: ONBOARDING_STEPS.GOALS,
    title: 'Career Goals',
    description: 'Define your career objectives'
  },
  {
    id: ONBOARDING_STEPS.SCHEDULE,
    title: 'Study Plan',
    description: 'Create your study schedule'
  },
  {
    id: ONBOARDING_STEPS.MENTORSHIP,
    title: 'Mentorship',
    description: 'Choose your mentor preferences'
  }
] as const;