// src/types/courses.ts

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  skills: string[];
  thumbnail?: string;
  instructor: {
    id: string;
    name: string;
    avatar?: string;
  };
  rating?: number;
  enrolledStudents?: number;
}

export interface CourseRecommendation extends Course {
  matchPercentage: number;
  matchedInterests: string[];
  startDate?: Date;
}

export interface CourseFilter {
  level?: string[];
  duration?: string[];
  skills?: string[];
  searchTerm?: string;
}
