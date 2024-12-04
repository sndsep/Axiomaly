// src/types/courses.ts
import { type User, type Lesson, type Enrollment, type Category } from '@prisma/client'

export interface CourseWithRelations extends Course {
 instructor: User
 lessons: Lesson[]
 enrollments: Enrollment[]
 category: Category | null
 progress?: CourseProgress
}

export interface CourseProgress {
 percentage: number
 lastUpdated: Date
 completedLessons: number
 totalLessons: number
 lastAccessedLesson?: {
   id: string
   title: string
 }
}

export interface CourseStats {
 totalStudents: number
 averageProgress: number
 completionRate: number
 averageRating: number 
 totalDuration: string
 totalLessons: number
 activeStudents: number
 studentsCompleted: number
}

export interface CoursesResponse {
 data: CourseWithRelations[]
 totalPages: number
 totalItems: number
 stats?: CourseStats
 filters?: {
   categories: Category[]
   levels: string[]
 }
}

export type CourseFilters = {
 search?: string
 category?: string
 level?: string
 sort?: string
 page: number
 limit: number
}