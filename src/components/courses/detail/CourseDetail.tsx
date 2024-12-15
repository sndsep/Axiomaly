// src/components/courses/detail/CourseDetail.tsx
'use client'

import React from 'react'
import { useCourseDetails } from '@/hooks/use-course-details'
import { useCourseEnrollment } from '@/hooks/use-course-enrollment'
import { CourseSyllabus } from './CourseSyllabus'
import { CourseProgress } from './CourseProgress'
import { CourseMaterials } from './CourseMaterials'
import { CourseDiscussion } from './CourseDiscussion'
import { Button } from '@/components/ui/forms/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs'
import { Progress } from '@/components/ui/forms/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/forms/avatar'
import { PlayCircle, BookOpen, MessageSquare, FileText, Users, Clock } from 'lucide-react'
import { useToast } from '@/components/ui/hooks/use-toast'
import type { CourseWithRelations, CourseProgress as ICourseProgress } from '@/types/courses'

interface CourseDetailProps {
  courseId: string
  initialData?: CourseWithRelations
}

export const CourseDetail = ({ courseId, initialData }: CourseDetailProps) => {
  const { toast } = useToast()
  const { course, isLoading, error } = useCourseDetails(courseId, initialData)
  const { isEnrolled, enrollInCourse, isEnrolling } = useCourseEnrollment(courseId)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!course) return <div>Course not found</div>

  const handleEnroll = async () => {
    try {
      await enrollInCourse()
      toast({
        title: 'Successfully enrolled',
        description: 'You can now start learning!',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to enroll in course. Please try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Course Header */}
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl font-bold">{course.title}</CardTitle>
                  <p className="mt-4 text-gray-600">{course.description}</p>
                
                  <div className="flex items-center gap-6 mt-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-500" />
                      <span>{course.enrollments.length} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-500" />
                      <span>{course.lessons.length} lessons</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-gray-500" />
                      <span>{course.category?.name}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <Avatar>
                      <AvatarImage src={course.instructor.image || ''} />
                      <AvatarFallback>{course.instructor.name?.[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{course.instructor.name}</p>
                      <p className="text-sm text-gray-500">Instructor</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            {isEnrolled ? (
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Your Progress</p>
                  <Progress value={course.progress?.percentage || 0} className="mb-2" />
                  <p className="text-sm text-gray-600">
                    {course.progress?.completedLessons || 0} of {course.progress?.totalLessons || 0} lessons completed
                  </p>
                </div>
                
                {course.progress?.lastAccessedLesson && (
                  <Button className="w-full" asChild>
                    <a href={`/courses/${course.id}/lessons/${course.progress.lastAccessedLesson.id}`}>
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Continue Learning
                    </a>
                  </Button>
                )}
              </div>
            ) : (
              <Button 
                className="w-full" 
                onClick={handleEnroll}
                disabled={isEnrolling}
              >
                {isEnrolling ? 'Enrolling...' : 'Enroll Now'}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

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

export default CourseDetail