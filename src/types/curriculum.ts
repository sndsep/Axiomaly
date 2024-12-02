// src/types/curriculum.ts
export * from '@prisma/client'

export interface Course {
  id: string;
  title: string;
  description?: string;
  credits: number;
  required: boolean;
}

export interface Milestone {
  title: string;
  description: string;
}

export interface CurriculumModule {
  term: number;
  courses: Course[];
  milestone?: Milestone;
}

export interface UserPreferences {
  experienceLevel: string;
  specializations: string[];
  careerGoals: string[];
  timeCommitment: number;
  preferredLearningStyle: string[];
}

export interface CurriculumPlanProps {
  userPreferences: UserPreferences;
}