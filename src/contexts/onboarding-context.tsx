//src/contexts/onboarding-context.tsx

'use client';

import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { OnboardingStep } from '@prisma/client';

type CareerPath = 'SHORT_COURSE' | 'DEGREE_PROGRAM';

interface OnboardingState {
  currentStep: OnboardingStep;
  careerPath?: CareerPath;
  surveyResponses?: Record<string, any>;
  selectedCourses?: string[];
  profileComplete?: boolean;
}

type OnboardingAction =
  | { type: 'SET_CAREER_PATH'; payload: CareerPath }
  | { type: 'SET_SURVEY_RESPONSES'; payload: Record<string, any> }
  | { type: 'SET_SELECTED_COURSES'; payload: string[] }
  | { type: 'COMPLETE_PROFILE' }
  | { type: 'SET_STEP'; payload: OnboardingStep }
  | { type: 'NEXT_STEP' }
  | { type: 'PREVIOUS_STEP' };

interface OnboardingContextType {
  state: OnboardingState;
  dispatch: React.Dispatch<OnboardingAction>;
  nextStep: () => void;
  previousStep: () => void;
}

const initialState: OnboardingState = {
  currentStep: OnboardingStep.CAREER_PATH,
  careerPath: undefined,
  surveyResponses: {},
  selectedCourses: [],
  profileComplete: false,
};

function onboardingReducer(state: OnboardingState, action: OnboardingAction): OnboardingState {
  switch (action.type) {
    case 'SET_CAREER_PATH':
      return {
        ...state,
        careerPath: action.payload,
      };
    case 'SET_SURVEY_RESPONSES':
      return {
        ...state,
        surveyResponses: action.payload,
      };
    case 'SET_SELECTED_COURSES':
      return {
        ...state,
        selectedCourses: action.payload,
      };
    case 'COMPLETE_PROFILE':
      return {
        ...state,
        profileComplete: true,
      };
    case 'SET_STEP':
      return {
        ...state,
        currentStep: action.payload,
      };
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: getNextStep(state.currentStep),
      };
    case 'PREVIOUS_STEP':
      return {
        ...state,
        currentStep: getPreviousStep(state.currentStep),
      };
    default:
      return state;
  }
}

function getNextStep(currentStep: OnboardingStep): OnboardingStep {
  const steps = Object.values(OnboardingStep);
  const currentIndex = steps.indexOf(currentStep);
  return steps[Math.min(currentIndex + 1, steps.length - 1)];
}

function getPreviousStep(currentStep: OnboardingStep): OnboardingStep {
  const steps = Object.values(OnboardingStep);
  const currentIndex = steps.indexOf(currentStep);
  return steps[Math.max(currentIndex - 1, 0)];
}

function getRouteForStep(step: OnboardingStep, careerPath?: CareerPath): string {
  switch (step) {
    case OnboardingStep.CAREER_PATH:
      return '/onboarding/career-path';
    case OnboardingStep.INTERESTS:
      return careerPath === 'SHORT_COURSE' 
        ? '/onboarding/short-course/survey'
        : '/onboarding/degree-program/survey';
    case OnboardingStep.RECOMMENDATIONS:
      return careerPath === 'SHORT_COURSE'
        ? '/onboarding/short-course/recommendations'
        : '/onboarding/degree-program/curriculum';
    case OnboardingStep.PORTFOLIO:
      return '/onboarding/profile';
    case OnboardingStep.MENTORSHIP:
      return '/onboarding/tour';
    default:
      return '/dashboard';
  }
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(onboardingReducer, initialState);
  const router = useRouter();

  const nextStep = useCallback(() => {
    dispatch({ type: 'NEXT_STEP' });
    const nextRoute = getRouteForStep(getNextStep(state.currentStep), state.careerPath);
    router.push(nextRoute);
  }, [state.currentStep, state.careerPath, router]);

  const previousStep = useCallback(() => {
    dispatch({ type: 'PREVIOUS_STEP' });
    const previousRoute = getRouteForStep(getPreviousStep(state.currentStep), state.careerPath);
    router.push(previousRoute);
  }, [state.currentStep, state.careerPath, router]);

  return (
    <OnboardingContext.Provider value={{ state, dispatch, nextStep, previousStep }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}