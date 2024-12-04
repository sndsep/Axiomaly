// src/components/courses/cards/course-card.tsx

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'
import { Progress } from '@/components/ui/forms/progress'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card'
import { Badge } from '@/components/ui/forms/badge'
import { type CourseWithRelations } from '@/types/courses'

interface CourseCardProps {
  course: CourseWithRelations
  progress: number
  lastUpdated?: Date
}

export function CourseCard({ course, progress, lastUpdated }: CourseCardProps) {
  return (
    <Link href={`/dashboard/courses/${course.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src={course.thumbnail || '/api/placeholder/400/300'}
            alt={course.title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="line-clamp-2">{course.title}</CardTitle>
            <Badge>{course.level}</Badge>
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <Image
              src={course.instructor.image || '/api/placeholder/40/40'}
              alt={course.instructor.name || 'Instructor'}
              width={24}
              height={24}
              className="rounded-full mr-2"
            />
            <span>{course.instructor.name}</span>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="text-sm text-gray-600 line-clamp-2">
              {course.description}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
              {lastUpdated && (
                <p className="text-xs text-gray-500">
                  Last activity: {formatDistanceToNow(lastUpdated)} ago
                </p>
              )}
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <span>{course._count.enrollments} students</span>
              <span>{course._count.resources} resources</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}