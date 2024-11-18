// types/next-auth.d.ts
import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      careerPath: string | null;
      hasCompletedOnboarding: boolean;
      onboardingProgress?: {
        currentStep: string;
        completed: boolean;
        responses: any;
      } | null;
    } & DefaultSession["user"]
  }

  interface User {
    id: string;
    role: string;
    careerPath: string | null;
    hasCompletedOnboarding: boolean;
    onboardingProgress?: {
      currentStep: string;
      completed: boolean;
      responses: any;
    } | null;
  }

  interface JWT {
    id: string;
    role: string;
    careerPath: string | null;
    hasCompletedOnboarding: boolean;
    onboardingProgress?: {
      currentStep: string;
      completed: boolean;
      responses: any;
    } | null;
  }
}