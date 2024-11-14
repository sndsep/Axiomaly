// src/types/onboarding.ts

export enum CareerPath {
  SHORT_COURSE = "SHORT_COURSE",
  DEGREE_PROGRAM = "DEGREE_PROGRAM",
}

export enum OnboardingStep {
  CAREER_PATH = "CAREER_PATH",
  INTERESTS = "INTERESTS",
  EXPERIENCE = "EXPERIENCE",
  GOALS = "GOALS",
  SCHEDULE = "SCHEDULE",
  BACKGROUND = "BACKGROUND",
  PORTFOLIO = "PORTFOLIO",
  MENTORSHIP = "MENTORSHIP",
  RECOMMENDATIONS = "RECOMMENDATIONS",
}

export interface CareerPathSelection {
  type: CareerPath;
}

export interface OnboardingResponse {
  careerPath?: CareerPath;
  timestamp?: string;
  interests?: string[];
  experience?: {
    level: string;
    years: number;
    tools: string[];
  };
  schedule?: {
    weeklyHours: number;
    preferredTimes: string[];
    timezone: string;
  };
  [key: string]: any;
}