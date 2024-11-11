// src/types/onboarding.ts
export enum CareerPath {
  SHORT_COURSE = 'SHORT_COURSE',
  DEGREE_PROGRAM = 'DEGREE_PROGRAM'
}

export enum OnboardingStep {
  CAREER_PATH = 'CAREER_PATH',
  INTERESTS = 'INTERESTS',
  EXPERIENCE = 'EXPERIENCE',
  GOALS = 'GOALS',
  SCHEDULE = 'SCHEDULE',
  BACKGROUND = 'BACKGROUND',
  PORTFOLIO = 'PORTFOLIO',
  MENTORSHIP = 'MENTORSHIP',
  RECOMMENDATIONS = 'RECOMMENDATIONS'
}

export interface OnboardingProgress {
  id: string;
  userId: string;
  currentStep: OnboardingStep;
  completed: boolean;
  responses: Record<string, any>;
  selectedCourse: string | null;
  viewedRecommendations: boolean;
  acceptedCurriculum: boolean;
  selectedSpecializations: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ShortCourseSurveyData {
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  primaryInterest: string;
  timeCommitment: number;
  learningGoals: string[];
}