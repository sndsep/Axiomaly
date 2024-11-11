import { ApiError } from '@/types/api'

interface UpdateProgressRequest {
  courseId: string
  progress: number
  lessonId?: string
}

interface UpdateProgressResponse {
  success: boolean
  progress: number
  updatedAt: string
}

export async function updateCourseProgress({
  courseId,
  progress,
  lessonId
}: UpdateProgressRequest): Promise<UpdateProgressResponse> {
  try {
    const response = await fetch(`/api/courses/${courseId}/progress`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ progress, lessonId })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new ApiError('Failed to update progress', response.status, error)
    }

    return response.json()
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    throw new ApiError('Network error', 500, error)
  }
}
