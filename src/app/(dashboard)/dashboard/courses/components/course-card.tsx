"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Course } from "@/types/course"

interface CourseCardProps {
  course: Course
  onEnroll?: () => void
}

export function CourseCard({ course, onEnroll }: CourseCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <h3 className="text-lg font-semibold">{course.title}</h3>
        {course.instructor && (
          <p className="text-sm text-muted-foreground">
            by {course.instructor}
          </p>
        )}
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">
          {course.description || "No description available"}
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onEnroll} 
          className="w-full"
          variant={course.enrolled ? "secondary" : "default"}
        >
          {course.enrolled ? "Continue Course" : "Enroll Now"}
        </Button>
      </CardFooter>
    </Card>
  )
}