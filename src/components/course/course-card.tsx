// src/components/course/course-card.tsx
'use client'

import type { Course } from '@/types/course'
import type { CourseProgress } from '@/types/progress'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/forms/card"
import { Button } from "@/components/ui/forms/button"
import { Progress } from "@/components/ui/forms/progress"
import { Clock, Award, PlayCircle, BookOpen, GraduationCap } from "lucide-react"
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

interface CourseCardProps {
  course: Course
  progress?: CourseProgress
  onEnroll?: (courseId: string) => void
  onContinue?: (courseId: string) => void
}

export function CourseCard({ 
  course, 
  progress,
  onEnroll,
  onContinue 
}: CourseCardProps) {
  const isEnrolled = Boolean(progress)
  
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{course.duration} hours</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <GraduationCap className="h-4 w-4" />
          <span>{course.level}</span>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4">
        <Button className="w-full">Start Learning</Button>
      </CardFooter>
    </Card>
  )
}