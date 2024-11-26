// src/types/career-paths.ts
export type CareerPathType = 'SHORT_COURSE' | 'DEGREE_PROGRAM';

export interface CareerPathFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CareerPath {
  type: CareerPathType;
  title: string;
  description: string;
  features: CareerPathFeature[];
  icon: React.ReactNode;
  color: string;
}

export interface CareerPathResponse {
  type: CareerPathType;
  nextStep: string;
  error?: string;
}