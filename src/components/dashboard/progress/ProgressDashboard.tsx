// src/components/dashboard/progress/ProgressDashboard.tsx
'use client';

import { Card } from "@/components/ui/forms/card"
import { Progress } from "@/components/ui/forms/progress"
import type { CourseProgress, OverallProgress } from "@/types/progress"
import { formatDistanceToNow } from "date-fns"

interface ProgressDashboardProps {
  coursesProgress: CourseProgress[]
  overallProgress: OverallProgress
}

export function ProgressDashboard({ 
  coursesProgress, 
  overallProgress 
}: ProgressDashboardProps) {
  return (
    <div className="space-y-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Overall Progress</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm text-gray-500">Completed Courses</p>
            <p className="text-2xl font-bold">
              {overallProgress.completedCourses}/{overallProgress.totalCourses}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Credits Earned</p>
            <p className="text-2xl font-bold">
              {overallProgress.completedCredits}/{overallProgress.totalCredits}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Average Progress</p>
            <div className="mt-2">
              <Progress value={overallProgress.averageProgress} />
              <p className="text-sm mt-1">{Math.round(overallProgress.averageProgress)}%</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coursesProgress.map((course) => (
          <Card key={course.courseId} className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Course Progress</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  course.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : course.status === 'in-progress' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-800'
                }`}>
                  {course.status}
                </span>
              </div>
              
              <Progress value={course.percentage} />
              
              <div className="text-sm text-gray-500 space-y-1">
                <p>Completed lessons: {course.completedLessons}/{course.totalLessons}</p>
                <p>Last updated: {formatDistanceToNow(course.lastUpdated, { addSuffix: true })}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}