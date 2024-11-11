import { CourseProgress, LessonProgress } from "@/types/progress"
import { ApiError } from "@/types/api"

export class ProgressService {
  static async updateCourseProgress(
    courseId: string, 
    progress: number
  ): Promise<CourseProgress> {
    try {
      const response = await fetch(`/api/courses/${courseId}/progress`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ progress })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new ApiError('Failed to update progress', response.status, error)
      }

      return response.json()
    } catch (error) {
      if (error instanceof ApiError) throw error
      throw new ApiError('Network error', 500, error)
    }
  }

  static async updateLessonProgress(
    courseId: string,
    lessonId: string,
    completed: boolean
  ): Promise<LessonProgress> {
    try {
      const response = await fetch(
        `/api/courses/${courseId}/lessons/${lessonId}/progress`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ completed })
        }
      )

      if (!response.ok) {
        const error = await response.json()
        throw new ApiError('Failed to update lesson progress', response.status, error)
      }

      return response.json()
    } catch (error) {
      if (error instanceof ApiError) throw error
      throw new ApiError('Network error', 500, error)
    }
  }
}
