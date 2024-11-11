// src/types/user-flows.ts

/**
 * @fileoverview Type definitions for user flows in the VFX Academy platform
 * These types represent the different paths and interactions users can have
 */

/**
 * Represents the student types in the platform
 * @enum {string}
 */
export enum StudentType {
    SHORT_COURSE = 'SHORT_COURSE',
    DEGREE_PROGRAM = 'DEGREE_PROGRAM',
  }
  
  /**
   * Represents the onboarding flow steps
   * @enum {string}
   */
  export enum OnboardingStep {
    LANDING = 'ONB_01_LandingPage',
    SIGNUP = 'ONB_02_SignUpForm',
    EMAIL_VERIFICATION = 'ONB_03_EmailVerification',
    WELCOME = 'ONB_04_Welcome',
    INTEREST_SURVEY = 'ONB_05_InterestSurvey',
    COURSE_RECOMMENDATION = 'ONB_06_CourseRecommendation',
    PROFILE_SETUP = 'ONB_07_ProfileSetup',
    PLATFORM_TOUR = 'ONB_08_PlatformTour',
    VFX_TOOLS_INTRO = 'ONB_09_VFXToolsIntro',
    FIRST_EXPERIENCE = 'ONB_10_FirstExperience',
  }
  
  /**
   * Interface for user progress tracking
   * @interface UserProgress
   */
  export interface UserProgress {
    currentStep: OnboardingStep;
    completedSteps: OnboardingStep[];
    studentType: StudentType;
    lastActiveDate: Date;
    completionPercentage: number;
  }
  
  /**
   * Interface for course recommendations
   * @interface CourseRecommendation
   */
  export interface CourseRecommendation {
    courseId: string;
    title: string;
    matchPercentage: number;
    skillsAddressed: string[];
    duration: string;
    level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  }