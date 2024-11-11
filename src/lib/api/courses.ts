// src/lib/api/courses.ts
import { Course } from '@/types/course'
import { CourseFilters } from '@/types/filters'

interface GetCoursesParams extends CourseFilters {
  search?: string
}

export async function getCourses(params: GetCoursesParams): Promise<Course[]> {
  const queryParams = new URLSearchParams()
  if (params.level !== 'all') queryParams.set('level', params.level)
  if (params.progress !== 'all') queryParams.set('progress', params.progress)
  if (params.search) queryParams.set('search', params.search)

  const response = await fetch(`/api/courses?${queryParams}`)
  if (!response.ok) {
    throw new Error('Failed to fetch courses')
  }
  return response.json()
}