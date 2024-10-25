'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, Clock, Award } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

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
  progress: number
}

export function CourseCard({ course, progress }: CourseCardProps) {
  const [isUpdating, setIsUpdating] = useState(false)

  async function updateProgress() {
    setIsUpdating(true)
    try {
      const response = await fetch('/api/progress/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId: course.id,
          completed: Math.min(progress + 10, 100) // Increases 10% each time
        })
      })

      if (!response.ok) throw new Error('Failed to update progress')

      toast({
        title: "Progress Updated",
        description: "Your course progress has been saved."
      })

      // Aquí podrías recargar los datos o usar un estado global
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update progress",
        variant: "destructive"
      })
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-sm">
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
            <div className="bg-secondary h-2 rounded-full">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-sm text-muted-foreground">
              {progress}% complete
            </div>
          </div>
          <Button 
            className="w-full" 
            onClick={updateProgress}
            disabled={isUpdating}
          >
            <PlayCircle className="mr-2 h-4 w-4" />
            {isUpdating ? 'Updating...' : 'Continue'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
