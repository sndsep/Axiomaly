// src/contexts/onboarding-context.tsx
// Provides global state management for the onboarding process
// Includes context definitions, provider component, and custom hooks

import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { OnboardingState, OnboardingAction, OnboardingContextType } from '@/types/onboarding';

// Initial state
const initialState: OnboardingState = {
  currentStep: 1,
  programType: null,
  interests: [],
  timeCommitment: null,
  experienceLevel: null,
  careerGoals: [],
  surveyCompleted: false,
  recommendationsGenerated: false,
  profile: {
    completed: false,
    data: null
  },
  error: null
};

// Create context
const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

// Reducer to handle state updates
function onboardingReducer(state: OnboardingState, action: OnboardingAction): OnboardingState {
  switch (action.type) {
    case 'SET_PROGRAM_TYPE':
      return {
        ...state,
        programType: action.payload,
        currentStep: 2
      };
    
    case 'UPDATE_INTERESTS':
      return {
        ...state,
        interests: action.payload
      };
    
    case 'SET_TIME_COMMITMENT':
      return {
        ...state,
        timeCommitment: action.payload
      };
    
    case 'SET_EXPERIENCE_LEVEL':
      return {
        ...state,
        experienceLevel: action.payload
      };
    
    case 'UPDATE_CAREER_GOALS':
      return {
        ...state,
        careerGoals: action.payload
      };
    
    case 'COMPLETE_SURVEY':
      return {
        ...state,
        surveyCompleted: true,
        currentStep: 3
      };
    
    case 'SET_RECOMMENDATIONS':
      return {
        ...state,
        recommendationsGenerated: true,
        currentStep: 4
      };
    
    case 'UPDATE_PROFILE':
      return {
        ...state,
        profile: {
          completed: true,
          data: action.payload
        },
        currentStep: 5
      };
    
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: state.currentStep + 1
      };
    
    case 'PREV_STEP':
      return {
        ...state,
        currentStep: Math.max(1, state.currentStep - 1)
      };
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    
    case 'RESET_ONBOARDING':
      return initialState;
    
    default:
      return state;
  }
}

// Provider component
export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(onboardingReducer, initialState);

  // Action creators
  const setProgramType = useCallback((type: 'short' | 'comprehensive') => {
    dispatch({ type: 'SET_PROGRAM_TYPE', payload: type });
  }, []);

  const updateInterests = useCallback((interests: string[]) => {
    dispatch({ type: 'UPDATE_INTERESTS', payload: interests });
  }, []);

  const setTimeCommitment = useCallback((commitment: string) => {
    dispatch({ type: 'SET_TIME_COMMITMENT', payload: commitment });
  }, []);

  const setExperienceLevel = useCallback((level: string) => {
    dispatch({ type: 'SET_EXPERIENCE_LEVEL', payload: level });
  }, []);

  const updateCareerGoals = useCallback((goals: string[]) => {
    dispatch({ type: 'UPDATE_CAREER_GOALS', payload: goals });
  }, []);

  const completeSurvey = useCallback(() => {
    dispatch({ type: 'COMPLETE_SURVEY' });
  }, []);

  const setRecommendations = useCallback(() => {
    dispatch({ type: 'SET_RECOMMENDATIONS' });
  }, []);

  const updateProfile = useCallback((profileData: any) => {
    dispatch({ type: 'UPDATE_PROFILE', payload: profileData });
  }, []);

  const nextStep = useCallback(() => {
    dispatch({ type: 'NEXT_STEP' });
  }, []);

  const prevStep = useCallback(() => {
    dispatch({ type: 'PREV_STEP' });
  }, []);

  const setError = useCallback((error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  }, []);

  const resetOnboarding = useCallback(() => {
    dispatch({ type: 'RESET_ONBOARDING' });
  }, []);

  const value = {
    state,
    setProgramType,
    updateInterests,
    setTimeCommitment,
    setExperienceLevel,
    updateCareerGoals,
    completeSurvey,
    setRecommendations,
    updateProfile,
    nextStep,
    prevStep,
    setError,
    resetOnboarding
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

// Custom hook to use the onboarding context
export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}

// src/types/onboarding.ts
// Type definitions for onboarding state and actions

export interface OnboardingState {
  currentStep: number;
  programType: 'short' | 'comprehensive' | null;
  interests: string[];
  timeCommitment: string | null;
  experienceLevel: string | null;
  careerGoals: string[];
  surveyCompleted: boolean;
  recommendationsGenerated: boolean;
  profile: {
    completed: boolean;
    data: any | null;
  };
  error: string | null;
}

export type OnboardingAction =
  | { type: 'SET_PROGRAM_TYPE'; payload: 'short' | 'comprehensive' }
  | { type: 'UPDATE_INTERESTS'; payload: string[] }
  | { type: 'SET_TIME_COMMITMENT'; payload: string }
  | { type: 'SET_EXPERIENCE_LEVEL'; payload: string }
  | { type: 'UPDATE_CAREER_GOALS'; payload: string[] }
  | { type: 'COMPLETE_SURVEY' }
  | { type: 'SET_RECOMMENDATIONS' }
  | { type: 'UPDATE_PROFILE'; payload: any }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET_ONBOARDING' };

export interface OnboardingContextType {
  state: OnboardingState;
  setProgramType: (type: 'short' | 'comprehensive') => void;
  updateInterests: (interests: string[]) => void;
  setTimeCommitment: (commitment: string) => void;
  setExperienceLevel: (level: string) => void;
  updateCareerGoals: (goals: string[]) => void;
  completeSurvey: () => void;
  setRecommendations: () => void;
  updateProfile: (profileData: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  setError: (error: string | null) => void;
  resetOnboarding: () => void;
}

// Utility function to validate onboarding progress
export function validateOnboardingStep(state: OnboardingState): boolean {
  switch (state.currentStep) {
    case 1:
      return state.programType !== null;
    case 2:
      return state.interests.length > 0 && state.timeCommitment !== null;
    case 3:
      return state.surveyCompleted;
    case 4:
      return state.recommendationsGenerated;
    case 5:
      return state.profile.completed;
    default:
      return false;
  }
}

// Custom hook for step validation
export function useStepValidation() {
  const { state } = useOnboarding();
  
  return {
    canProceed: validateOnboardingStep(state),
    currentStep: state.currentStep,
    totalSteps: state.programType === 'short' ? 4 : 5
  };
}// src/contexts/onboarding-context.tsx
// Provides global state management for the onboarding process
// Includes context definitions, provider component, and custom hooks

import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { OnboardingState, OnboardingAction, OnboardingContextType } from '@/types/onboarding';

// Initial state
const initialState: OnboardingState = {
  currentStep: 1,
  programType: null,
  interests: [],
  timeCommitment: null,
  experienceLevel: null,
  careerGoals: [],
  surveyCompleted: false,
  recommendationsGenerated: false,
  profile: {
    completed: false,
    data: null
  },
  error: null
};

// Create context
const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

// Reducer to handle state updates
function onboardingReducer(state: OnboardingState, action: OnboardingAction): OnboardingState {
  switch (action.type) {
    case 'SET_PROGRAM_TYPE':
      return {
        ...state,
        programType: action.payload,
        currentStep: 2
      };
    
    case 'UPDATE_INTERESTS':
      return {
        ...state,
        interests: action.payload
      };
    
    case 'SET_TIME_COMMITMENT':
      return {
        ...state,
        timeCommitment: action.payload
      };
    
    case 'SET_EXPERIENCE_LEVEL':
      return {
        ...state,
        experienceLevel: action.payload
      };
    
    case 'UPDATE_CAREER_GOALS':
      return {
        ...state,
        careerGoals: action.payload
      };
    
    case 'COMPLETE_SURVEY':
      return {
        ...state,
        surveyCompleted: true,
        currentStep: 3
      };
    
    case 'SET_RECOMMENDATIONS':
      return {
        ...state,
        recommendationsGenerated: true,
        currentStep: 4
      };
    
    case 'UPDATE_PROFILE':
      return {
        ...state,
        profile: {
          completed: true,
          data: action.payload
        },
        currentStep: 5
      };
    
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: state.currentStep + 1
      };
    
    case 'PREV_STEP':
      return {
        ...state,
        currentStep: Math.max(1, state.currentStep - 1)
      };
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    
    case 'RESET_ONBOARDING':
      return initialState;
    
    default:
      return state;
  }
}

// Provider component
export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(onboardingReducer, initialState);

  // Action creators
  const setProgramType = useCallback((type: 'short' | 'comprehensive') => {
    dispatch({ type: 'SET_PROGRAM_TYPE', payload: type });
  }, []);

  const updateInterests = useCallback((interests: string[]) => {
    dispatch({ type: 'UPDATE_INTERESTS', payload: interests });
  }, []);

  const setTimeCommitment = useCallback((commitment: string) => {
    dispatch({ type: 'SET_TIME_COMMITMENT', payload: commitment });
  }, []);

  const setExperienceLevel = useCallback((level: string) => {
    dispatch({ type: 'SET_EXPERIENCE_LEVEL', payload: level });
  }, []);

  const updateCareerGoals = useCallback((goals: string[]) => {
    dispatch({ type: 'UPDATE_CAREER_GOALS', payload: goals });
  }, []);

  const completeSurvey = useCallback(() => {
    dispatch({ type: 'COMPLETE_SURVEY' });
  }, []);

  const setRecommendations = useCallback(() => {
    dispatch({ type: 'SET_RECOMMENDATIONS' });
  }, []);

  const updateProfile = useCallback((profileData: any) => {
    dispatch({ type: 'UPDATE_PROFILE', payload: profileData });
  }, []);

  const nextStep = useCallback(() => {
    dispatch({ type: 'NEXT_STEP' });
  }, []);

  const prevStep = useCallback(() => {
    dispatch({ type: 'PREV_STEP' });
  }, []);

  const setError = useCallback((error: string | null) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  }, []);

  const resetOnboarding = useCallback(() => {
    dispatch({ type: 'RESET_ONBOARDING' });
  }, []);

  const value = {
    state,
    setProgramType,
    updateInterests,
    setTimeCommitment,
    setExperienceLevel,
    updateCareerGoals,
    completeSurvey,
    setRecommendations,
    updateProfile,
    nextStep,
    prevStep,
    setError,
    resetOnboarding
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

// Custom hook to use the onboarding context
export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}

// src/types/onboarding.ts
// Type definitions for onboarding state and actions

export interface OnboardingState {
  currentStep: number;
  programType: 'short' | 'comprehensive' | null;
  interests: string[];
  timeCommitment: string | null;
  experienceLevel: string | null;
  careerGoals: string[];
  surveyCompleted: boolean;
  recommendationsGenerated: boolean;
  profile: {
    completed: boolean;
    data: any | null;
  };
  error: string | null;
}

export type OnboardingAction =
  | { type: 'SET_PROGRAM_TYPE'; payload: 'short' | 'comprehensive' }
  | { type: 'UPDATE_INTERESTS'; payload: string[] }
  | { type: 'SET_TIME_COMMITMENT'; payload: string }
  | { type: 'SET_EXPERIENCE_LEVEL'; payload: string }
  | { type: 'UPDATE_CAREER_GOALS'; payload: string[] }
  | { type: 'COMPLETE_SURVEY' }
  | { type: 'SET_RECOMMENDATIONS' }
  | { type: 'UPDATE_PROFILE'; payload: any }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET_ONBOARDING' };

export interface OnboardingContextType {
  state: OnboardingState;
  setProgramType: (type: 'short' | 'comprehensive') => void;
  updateInterests: (interests: string[]) => void;
  setTimeCommitment: (commitment: string) => void;
  setExperienceLevel: (level: string) => void;
  updateCareerGoals: (goals: string[]) => void;
  completeSurvey: () => void;
  setRecommendations: () => void;
  updateProfile: (profileData: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  setError: (error: string | null) => void;
  resetOnboarding: () => void;
}

// Utility function to validate onboarding progress
export function validateOnboardingStep(state: OnboardingState): boolean {
  switch (state.currentStep) {
    case 1:
      return state.programType !== null;
    case 2:
      return state.interests.length > 0 && state.timeCommitment !== null;
    case 3:
      return state.surveyCompleted;
    case 4:
      return state.recommendationsGenerated;
    case 5:
      return state.profile.completed;
    default:
      return false;
  }
}

// Custom hook for step validation
export function useStepValidation() {
  const { state } = useOnboarding();
  
  return {
    canProceed: validateOnboardingStep(state),
    currentStep: state.currentStep,
    totalSteps: state.programType === 'short' ? 4 : 5
  };
}