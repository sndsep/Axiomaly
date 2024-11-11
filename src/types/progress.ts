export type ProgressStatus = 'not-started' | 'in-progress' | 'completed'

export interface Progress {
  percentage: number
  status: ProgressStatus
  lastUpdated: Date
}

export interface CourseProgress extends Progress {
  courseId: string
  currentLessonId?: string
  nextLessonId?: string
  completedLessons: number
  totalLessons: number
}

export interface LessonProgress extends Progress {
  lessonId: string
  courseId: string
  timeSpent: number
  attempts: number
}

export interface OverallProgress {
  completedCredits: number
  totalCredits: number
  completedCourses: number
  totalCourses: number
  averageProgress: number
}
