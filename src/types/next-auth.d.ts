// src/types/next-auth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      careerPath?: 'SHORT_COURSE' | 'DEGREE_PROGRAM';
      onboardingStep?: number;
      hasCompletedOnboarding?: boolean;
    } & DefaultSession["user"]
  }

  interface User {
    careerPath?: 'SHORT_COURSE' | 'DEGREE_PROGRAM';
    onboardingStep?: number;
    hasCompletedOnboarding?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      careerPath?: 'SHORT_COURSE' | 'DEGREE_PROGRAM';
      onboardingStep?: number;
      hasCompletedOnboarding?: boolean;
    } & DefaultSession["user"]
  }
}