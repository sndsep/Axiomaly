// src/components/onboarding/types.ts
import { CareerPath } from '@prisma/client';
import { CAREER_PATH_OPTIONS } from './constants';

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

export type CareerPathDetails = {
  title: string;
  description: string;
  icon: 'Rocket' | 'GraduationCap';
  duration: string;
  focus: string;
  outcome: string;
};

export type CareerPathOptions = typeof CAREER_PATH_OPTIONS;