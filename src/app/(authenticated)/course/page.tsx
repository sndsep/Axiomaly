// src/app/(authenticated)/course/page.tsx
import { getOverallProgress } from '@/lib/api/progress'
import { getEnrolledCourses } from '@/lib/api/courses'
import { OverallProgressCard } from '@/components/dashboard/progress/OverallProgressCard'
import { DashboardCourses } from '@/components/dashboard/courses/DashboardCourses'
import { DashboardHeader } from '@/components/dashboard/layout/DashboardHeader'

export default function CoursePage() {
  return (
    <div className="container py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Course Overview</h1>
        <p className="text-muted-foreground">
          Explore your course content and track your progress
        </p>
        {/* Course content components */}
      </div>
    </div>
  )
}