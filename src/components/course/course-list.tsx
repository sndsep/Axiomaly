// src/components/course/course-list.tsx
'use client'

import { CourseCard } from './course-card'
import type { Course } from '@/types/course'
import type { CourseProgress } from '@/types/progress'

interface CourseListProps {
  courses: Course[]
  progress: Record<string, CourseProgress>
  onProgressUpdate?: (courseId: string, progress: CourseProgress) => void
}

export function CourseList({ courses, progress, onProgressUpdate }: CourseListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          progress={progress[course.id] || { percentage: 0 }}
          onProgressUpdate={(updatedProgress) => 
            onProgressUpdate?.(course.id, updatedProgress)
          }
        />
      ))}
    </div>
  )
}