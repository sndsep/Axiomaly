// src/components/onboarding/types.ts
import { CareerPath } from '@prisma/client';

export interface ShortCourseSurveyData {
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  primaryInterest: string;
  timeCommitment: number;
  learningGoals: string[];
}

export interface ComprehensiveSurveyData {
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  specializations: string[];
  careerGoals: string[];
  timeCommitment: number;
  preferredLearningStyle: string[];
  priorEducation?: string;
  portfolioUrl?: string;
}

export interface OnboardingSidebarProps {
  currentStep: number;
  careerPath: CareerPath;
}