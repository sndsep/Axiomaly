// src/types/course.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  instructor: {
    id: string;
    name: string;
    image: string | null;
  };
  category: {
    id: string;
    name: string;
  } | null;
  _count: {
    enrollments: number;
    lessons: number;
  };
  createdAt: string;
  rating?: number;
}

export interface CourseProgress {
  percentage: number;
  lastUpdated: Date;
  completedLessons: number;
  totalLessons: number;
}

export interface CourseStats {
  totalStudents: number;
  averageProgress: number;
  completionRate: number;
  averageRating: number;
  totalDuration: string;
}

export interface CourseApiResponse {
  courses: Course[];
  progress: Record<string, CourseProgress>;
  categories: Array<{
    id: string;
    name: string;
  }>;
  stats: CourseStats;
  totalPages: number;
  totalCourses: number;
}