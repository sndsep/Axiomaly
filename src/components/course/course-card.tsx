// src/components/course/course-card.tsx
'use client'

import type { Course } from '@/types/course'
import type { CourseProgress } from '@/types/progress'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/forms/card"
import { Button } from "@/components/ui/forms/button"
import { Progress } from "@/components/ui/forms/progress"
import { Clock, Award, PlayCircle, BookOpen } from "lucide-react"
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
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span>{course.title}</span>
          {course.level && (
            <span className="text-sm px-2 py-1 bg-primary/10 rounded-full">
              {course.level}
            </span>
          )}
        </CardTitle>
        <CardDescription className="space-y-2">
          <p>{course.description}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <BookOpen className="mr-1 h-4 w-4" />
            {course._count?.lessons || 0} lecciones
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                por {course.instructor.name}
              </span>
            </div>
          </div>
          
          {progress && (
            <div className="space-y-2">
              <Progress value={progress.percentage} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{progress.percentage}% completado</span>
                <span>{progress.completedLessons}/{progress.totalLessons} lecciones</span>
              </div>
            </div>
          )}

          <Button 
            className="w-full" 
            onClick={() => isEnrolled 
              ? onContinue?.(course.id)
              : onEnroll?.(course.id)
            }
          >
            {isEnrolled ? (
              <>
                <PlayCircle className="mr-2 h-4 w-4" />
                Continuar
              </>
            ) : (
              <>
                <BookOpen className="mr-2 h-4 w-4" />
                Inscribirse
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}