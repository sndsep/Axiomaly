// src/components/courses/list/course-grid.tsx
import React from 'react'
import { type CourseWithRelations } from '@/types/courses'
import { CourseCard } from '../cards/course-card'
import { CourseCardSkeleton } from '@/components/skeletons/course-card-skeleton'

interface CourseGridProps {
  courses: CourseWithRelations[]
  progress: Record<string, { percentage: number; lastUpdated: Date }>
  isLoading?: boolean
}

export function CourseGrid({ courses, progress, isLoading }: CourseGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <CourseCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (!courses.length) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">No courses found</h3>
        <p className="mt-2 text-sm text-gray-600">
          Try adjusting your filters or search terms
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          progress={progress[course.id]?.percentage || 0}
          lastUpdated={progress[course.id]?.lastUpdated}
        />
      ))}
    </div>
  )
}