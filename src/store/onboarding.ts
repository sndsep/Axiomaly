// src/store/onboarding.ts

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface OnboardingState {
  currentStep: string
  careerPath: string | null
  setCareerPath: (path: string) => void
  setCurrentStep: (step: string) => void
  reset: () => void
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      currentStep: 'career-path',
      careerPath: null,
      setCareerPath: (path) => set({ careerPath: path }),
      setCurrentStep: (step) => set({ currentStep: step }),
      reset: () => set({ currentStep: 'career-path', careerPath: null }),
    }),
    {
      name: 'onboarding-storage',
    }
  )
)