// src/types/dashboard.ts

export interface Course {
  id: string;
  title: string;
  progress: number;
  lastAccessed: string;
  nextLesson: string;
  totalLessons: number;
  completedLessons: number;
}

export interface DashboardStats {
  totalHoursLearned: number;
  coursesInProgress: number;
  completedCourses: number;
  totalAchievements: number;
}

export interface LearningPath {
  careerPath: string;
  currentLevel: number;
  progress: number;
}

export interface DashboardData {
  courses: Course[];
  stats: DashboardStats;
  learningPath: LearningPath;
}

export type StatsCardProps = {
  title: string;
  value: number | string;
  icon: React.ElementType;
  description?: string;
}

export type CourseProgressProps = {
  course: Course;
}

export type LearningPathProgressProps = {
  careerPath: string;
  currentLevel: number;
  progress: number;
}