'use client'

import { useProgress } from '@/hooks/use-progress'
import { CourseProgress } from '@/types/progress'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/forms/card"
import { Button } from "@/components/ui/forms/button"
import { Progress } from "@/components/ui/forms/progress"
import { Clock, Award, PlayCircle } from "lucide-react"
import { toast } from "@/components/ui/hooks/use-toast"

interface CourseCardProps {
  course: {
    id: string
    title: string
    description?: string
    thumbnail?: string
    duration?: string
    level?: string
    instructor?: string
  }
  progress: CourseProgress
  onProgressUpdate?: (progress: CourseProgress) => void
}

export function CourseCard({ course, progress, onProgressUpdate }: CourseCardProps) {
  const { isUpdating, updateProgress } = useProgress({
    onSuccess: onProgressUpdate
  })

  const handleProgressUpdate = () => {
    updateProgress(course.id, progress.percentage + 10)
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>{course.level}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Progress value={progress.percentage} className="h-2" />
            <div className="text-sm text-muted-foreground">
              {progress.percentage}% completed
            </div>
          </div>

          <Button 
            className="w-full" 
            onClick={handleProgressUpdate}
            disabled={isUpdating || progress.percentage >= 100}
          >
            <PlayCircle className="mr-2 h-4 w-4" />
            {isUpdating ? "Updating..." : progress.percentage >= 100 ? "Completed" : "Continue"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
