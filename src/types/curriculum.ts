// src/types/curriculum.ts

export interface CurriculumStage {
  title: string;
  duration: string;
  description: string;
  courses: Course[];
  learningOutcomes: string[];
}

export interface Specialization {
  id: string;
  title: string;
  description: string;
  careerPaths: string[];
  coreSkills: string[];
  courses: Course[];
}

export interface CurriculumPlan {
  stages: CurriculumStage[];
  specialization: Specialization;
  totalDuration: string;
  certifications: string[];
  careerOutcomes: {
    roles: string[];
    industries: string[];
  };
}
