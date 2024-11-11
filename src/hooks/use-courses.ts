import { useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query'
import { Course } from '@/types/course'

interface CourseResponse {
  courses: Course[]
  nextCursor?: number
}

interface UseCourseOptions {
  limit?: number
  search?: string
  category?: string
  initialData?: {
    pages: CourseResponse[]
    pageParams: number[]
  }
}

export function useCourses(options: UseCourseOptions = {}): UseInfiniteQueryResult<CourseResponse> {
  const { limit = 10, search, category, initialData } = options

  return useInfiniteQuery<CourseResponse>({
    queryKey: ['courses', { search, category, limit }],
    queryFn: async ({ pageParam = 1 }) => {
      const params = new URLSearchParams({
        page: pageParam.toString(),
        limit: limit.toString(),
        ...(search && { search }),
        ...(category && { category })
      })
      
      const res = await fetch(`/api/courses?${params}`)
      if (!res.ok) throw new Error('Failed to fetch courses')
      return res.json()
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialData
  })
}

export function useUserCourses(userId: string) {
  return useQuery({
    queryKey: ['user-courses', userId],
    queryFn: async () => {
      const res = await fetch(`/api/users/${userId}/courses`)
      if (!res.ok) throw new Error('Failed to fetch user courses')
      return res.json()
    }
  })
}

export function useCourseDetails(courseId: string) {
  return useQuery({
    queryKey: ['course', courseId],
    queryFn: async () => {
      const res = await fetch(`/api/courses/${courseId}`)
      if (!res.ok) throw new Error('Failed to fetch course details')
      return res.json()
    },
    enabled: !!courseId
  })
}
