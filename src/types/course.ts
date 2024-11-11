export interface Course {
  id: string
  title: string
  description?: string
  thumbnail?: string
  duration?: string
  level?: string
  category?: string
  instructor: {
    id: string
    name: string
  }
  progress?: {
    percentage: number
    status: 'not-started' | 'in-progress' | 'completed'
    lastUpdated: Date
  }
  _count?: {
    enrollments: number
    lessons: number
  }
  createdAt: Date
}

export interface CourseLesson {
  id: string
  title: string
  description: string
  duration: number
  videoUrl?: string
  order: number
  isCompleted?: boolean
  courseId: string
}

export interface CourseEnrollment {
  id: string
  userId: string
  courseId: string
  enrolledAt: Date
  completedAt?: Date
  progress: number
  status: 'active' | 'completed' | 'dropped'
}

export interface CourseReview {
  id: string
  userId: string
  courseId: string
  rating: number
  comment: string
  createdAt: Date
  user: {
    name: string
    avatar?: string
  }
}

export interface Expert {
  id: string
  name: string
  role: string
  image: string
  company?: string
}

export interface Project {
  id: string
  title: string
  student: string
  image: string
  category: string
  likes: number
}
