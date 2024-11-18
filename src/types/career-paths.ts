// src/types/career-paths.ts

export interface CareerPathFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CareerPathOption {
  type: CareerPath;
  title: string;
  description: string;
  duration: string;
  features: CareerPathFeature[];
  outcomes: string[];
  requirements?: string[];
}

export interface PathSelection {
  selectedPath: CareerPath;
  timestamp: Date;
}
