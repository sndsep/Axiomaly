// src/components/courses/enrolled/EnrolledCourseList.tsx
'use client'

import { CourseWithRelations } from '@/types/courses'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'

interface EnrolledCourseListProps {
  courses: CourseWithRelations[]
}

export function EnrolledCourseList({ courses }: EnrolledCourseListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.id} className="hover:shadow-lg transition-shadow">
          <Link href={`/dashboard/courses/${course.id}`}>
            <div className="relative pt-[56.25%]">
              <img
                src={course.thumbnail || '/api/placeholder/400/225'}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{course.title}</h3>
              <div className="text-sm text-muted-foreground mb-4">
                <p>Instructor: {course.instructor.name}</p>
                <Progress 
                  value={course.progress?.progress || 0} 
                  className="h-2 mt-2"
                />
                <p className="mt-1 text-xs">
                  {course.progress?.progress || 0}% Complete
                </p>
              </div>
              <div className="text-xs text-muted-foreground">
                Last accessed: {course.lastAccessed || 'Never'}
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  )
}