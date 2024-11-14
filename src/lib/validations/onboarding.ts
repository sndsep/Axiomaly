// src/lib/validations/onboarding.ts

import { z } from "zod";
import { CareerPath, OnboardingStep } from "@/types/onboarding";

export const careerPathSchema = z.object({
  type: z.nativeEnum(CareerPath),
});

export const onboardingProgressSchema = z.object({
  currentStep: z.nativeEnum(OnboardingStep),
  completed: z.boolean(),
  responses: z.record(z.any()).optional(),
  selectedCourse: z.string().nullable().optional(),
  viewedRecommendations: z.boolean().optional(),
  acceptedCurriculum: z.boolean().optional(),
  selectedSpecializations: z.array(z.string()).optional(),
});

export type CareerPathInput = z.infer<typeof careerPathSchema>;
export type OnboardingProgressInput = z.infer<typeof onboardingProgressSchema>;