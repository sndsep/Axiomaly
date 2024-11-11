// src/lib/api/onboarding.ts
// API helpers for handling onboarding data and interactions with the backend

import prisma from '@/lib/db';
import { OnboardingState } from '@/types/onboarding';

/**
 * Save onboarding progress to the database
 * @param userId - The user's ID
 * @param onboardingData - Current onboarding state
 */
export async function saveOnboardingProgress(
  userId: string, 
  onboardingData: Partial<OnboardingState>
) {
  try {
    const onboarding = await prisma.onboardingProgress.upsert({
      where: {
        userId: userId,
      },
      update: {
        currentStep: onboardingData.currentStep ? parseInt(onboardingData.currentStep as string, 10) : 1,
        responses: onboardingData as any, // We'll store the full state
        updatedAt: new Date(),
      },
      create: {
        userId: userId,
        currentStep: onboardingData.currentStep ? parseInt(onboardingData.currentStep as string, 10) : 1,
        responses: onboardingData as any,
      },
    });

    return onboarding;
  } catch (error) {
    console.error('Error saving onboarding progress:', error);
    throw new Error('Failed to save onboarding progress');
  }
}

/**
 * Retrieve onboarding progress from the database
 * @param userId - The user's ID
 */
export async function getOnboardingProgress(userId: string) {
  try {
    const onboarding = await prisma.onboardingProgress.findUnique({
      where: {
        userId: userId,
      },
    });

    return onboarding;
  } catch (error) {
    console.error('Error retrieving onboarding progress:', error);
    throw new Error('Failed to retrieve onboarding progress');
  }
}

/**
 * Update user preferences based on onboarding responses
 * @param userId - The user's ID
 * @param preferences - User preferences derived from onboarding
 */
export async function updateUserPreferences(
  userId: string,
  preferences: any
) {
  try {
    const userPreferences = await prisma.userPreferences.upsert({
      where: {
        userId: userId,
      },
      update: {
        ...preferences,
        updatedAt: new Date(),
      },
      create: {
        userId: userId,
        ...preferences,
      },
    });

    return userPreferences;
  } catch (error) {
    console.error('Error updating user preferences:', error);
    throw new Error('Failed to update user preferences');
  }
}

/**
 * Generate course recommendations based on user preferences
 * @param userId - The user's ID
 * @param criteria - Criteria for course recommendations
 */
export async function generateRecommendations(
  userId: string,
  criteria: {
    interests: string[];
    timeCommitment: string;
    experienceLevel?: string;
    programType: 'short' | 'comprehensive';
  }
) {
  try {
    // Get all available courses
    const courses = await prisma.course.findMany({
      include: {
        instructor: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    });

    // Apply recommendation algorithm
    const recommendations = courses
      .map(course => {
        // Calculate match percentage based on criteria
        const matchPercentage = calculateMatchPercentage(course, criteria);
        return {
          ...course,
          matchPercentage,
        };
      })
      .filter(course => course.matchPercentage > 60) // Only return good matches
      .sort((a, b) => b.matchPercentage - a.matchPercentage); // Sort by match percentage

    return recommendations;
  } catch (error) {
    console.error('Error generating recommendations:', error);
    throw new Error('Failed to generate course recommendations');
  }
}

/**
 * Helper function to calculate course match percentage
 * @param course - Course data
 * @param criteria - User criteria
 */
function calculateMatchPercentage(course: any, criteria: any): number {
  let score = 0;
  let totalFactors = 0;

  // Match interests
  if (criteria.interests.some((interest: string) => 
    course.tags?.includes(interest))) {
    score += 40;
  }
  totalFactors += 40;

  // Match experience level
  if (course.level === criteria.experienceLevel) {
    score += 30;
  }
  totalFactors += 30;

  // Match time commitment
  if (isTimeCommitmentCompatible(course.duration, criteria.timeCommitment)) {
    score += 30;
  }
  totalFactors += 30;

  return (score / totalFactors) * 100;
}

/**
 * Helper function to check time commitment compatibility
 */
function isTimeCommitmentCompatible(
  courseDuration: string,
  userCommitment: string
): boolean {
  // Implementation would depend on how course duration is stored
  // This is a simplified example
  const commitmentLevels = {
    minimal: 5,
    moderate: 10,
    dedicated: 20,
  };

  const userHours = commitmentLevels[userCommitment as keyof typeof commitmentLevels];
  const courseHours = parseInt(courseDuration);

  return courseHours <= userHours;
}

// src/lib/storage/onboarding.ts
// Local storage helpers for handling onboarding state

const ONBOARDING_STORAGE_KEY = 'vfx_academy_onboarding';

/**
 * Save onboarding state to local storage
 * @param state - Current onboarding state
 */
export function saveOnboardingState(state: Partial<OnboardingState>): void {
  try {
    localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving onboarding state:', error);
  }
}

/**
 * Retrieve onboarding state from local storage
 */
export function getOnboardingState(): Partial<OnboardingState> | null {
  try {
    const stored = localStorage.getItem(ONBOARDING_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error retrieving onboarding state:', error);
    return null;
  }
}

/**
 * Clear onboarding state from local storage
 */
export function clearOnboardingState(): void {
  try {
    localStorage.removeItem(ONBOARDING_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing onboarding state:', error);
  }
}

/**
 * Store onboarding draft responses
 * @param step - Current step number
 * @param data - Step data to save
 */
export function saveOnboardingDraft(step: number, data: any): void {
  try {
    const key = `${ONBOARDING_STORAGE_KEY}_draft_${step}`;
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving onboarding draft:', error);
  }
}

/**
 * Retrieve onboarding draft responses
 * @param step - Step number to retrieve
 */
export function getOnboardingDraft(step: number): any {
  try {
    const key = `${ONBOARDING_STORAGE_KEY}_draft_${step}`;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error retrieving onboarding draft:', error);
    return null;
  }
}

/**
 * Clear all onboarding drafts
 */
export function clearOnboardingDrafts(): void {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(`${ONBOARDING_STORAGE_KEY}_draft_`)) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error('Error clearing onboarding drafts:', error);
  }
}