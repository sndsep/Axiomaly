export type CareerPath = 'SHORT_COURSE' | 'DEGREE_PROGRAM';

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

export interface SurveyResponses {
  experienceLevel: ExperienceLevel;
  interests: string[];
  weeklyHours: number;
  goals: string[];
}

export interface ShortCourseSurvey extends SurveyResponses {
  primaryFocus: string;
  timeframe: string;
}

export interface ComprehensiveSurvey extends SurveyResponses {
  background: string;
  specialization: string;
  industryPreference: string;
  projectExperience: string[];
}

export interface CourseRecommendation {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  instructor: {
    name: string;
    title: string;
  };
  matchScore: number;
}

export interface CurriculumPlan {
  specialization: string;
  courses: {
    term: number;
    courses: CourseRecommendation[];
  }[];
  totalDuration: string;
  certifications: string[];
  careerOutcomes: string[];
}

export interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  route: string;
  isCompleted: boolean;
}

export interface TourStep {
  title: string;
  description: string;
  element: string;
  placement: 'top' | 'right' | 'bottom' | 'left';
}

export interface OnboardingProgress {
  userId: string;
  currentStep: number;
  careerPath?: CareerPath;
  surveyResponses?: SurveyResponses;
  selectedCourses?: string[];
  curriculumPlan?: CurriculumPlan;
  isCompleted: boolean;
  completedSteps: number[];
}