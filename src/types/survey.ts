// src/types/survey.ts
import { CareerPath, OnboardingStep } from '@prisma/client';

export const surveySchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
  weeklyHours: z.number().min(1).max(40),
  goals: z.array(z.string()).min(1, 'Please select at least one goal'),
  specializations: z.array(z.string()).optional(),
  careerGoals: z.array(z.string()).optional(),
  timeCommitment: z.number().optional(),
  priorEducation: z.string().optional(),
  portfolioUrl: z.string().url().optional().or(z.literal('')),
  careerPath: z.nativeEnum(CareerPath),
});

export type SurveyData = z.infer<typeof surveySchema>;

export interface OnboardingData {
  userId: string;
  currentStep: OnboardingStep;
  completed: boolean;
  responses: SurveyData;
  selectedCourse?: string;
  viewedRecommendations: boolean;
  acceptedCurriculum: boolean;
  selectedSpecializations: string[];
}