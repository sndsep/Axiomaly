// src/components/courses/detail/CourseDetail.tsx
import React from 'react'
import { useCourseDetails } from '@/hooks/use-course-details'
import { useCourseEnrollment } from '@/hooks/use-course-enrollment'
import { CourseSyllabus } from './CourseSyllabus'
import { CourseProgress } from './CourseProgress'
import { CourseMaterials } from './CourseMaterials'
import { CourseDiscussion } from './CourseDiscussion'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card'
import { PlayCircle, BookOpen, MessageSquare, FileText } from 'lucide-react'

interface CourseDetailProps {
  courseId: string
}

export const CourseDetail = ({ courseId }: CourseDetailProps) => {
  const { course, isLoading, error } = useCourseDetails(courseId)
  const { isEnrolled, enrollInCourse } = useCourseEnrollment(courseId)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Course Header */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-bold">{course.title}</CardTitle>
              <div className="mt-2 text-muted-foreground">
                <span>By {course.instructor.name}</span>
                <span className="mx-2">•</span>
                <span>{course.duration}</span>
                <span className="mx-2">•</span>
                <span>{course.level}</span>
              </div>
            </div>
            {!isEnrolled && (
              <Button size="lg" onClick={() => enrollInCourse()}>
                Enroll Now
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{course.description}</p>
        </CardContent>
      </Card>

      {/* Course Content */}
      <Tabs defaultValue="content" className="space-y-4">
        <TabsList>
          <TabsTrigger value="content">
            <BookOpen className="w-4 h-4 mr-2" />
            Content
          </TabsTrigger>
          {isEnrolled && (
            <>
              <TabsTrigger value="progress">
                <PlayCircle className="w-4 h-4 mr-2" />
                My Progress
              </TabsTrigger>
              <TabsTrigger value="materials">
                <FileText className="w-4 h-4 mr-2" />
                Materials
              </TabsTrigger>
              <TabsTrigger value="discussion">
                <MessageSquare className="w-4 h-4 mr-2" />
                Discussion
              </TabsTrigger>
            </>
          )}
        </TabsList>

        <TabsContent value="content">
          <CourseSyllabus course={course} isEnrolled={isEnrolled} />
        </TabsContent>

        {isEnrolled && (
          <>
            <TabsContent value="progress">
              <CourseProgress courseId={courseId} />
            </TabsContent>

            <TabsContent value="materials">
              <CourseMaterials courseId={courseId} />
            </TabsContent>

            <TabsContent value="discussion">
              <CourseDiscussion courseId={courseId} />
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  )
}

