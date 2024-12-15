// src/components/courses/detail/CourseSyllabus.tsx
'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/forms/card';
import { Button } from '@/components/ui/forms/button';
import { Progress } from '@/components/ui/forms/progress';
import { LessonView } from '../lessons/LessonView';
import { ChevronRight, PlayCircle, CheckCircle, Lock } from 'lucide-react';
import type { CourseWithRelations } from '@/types/courses';

interface CourseSyllabusProps {
  course: CourseWithRelations;
  isEnrolled: boolean;
}

export function CourseSyllabus({ course, isEnrolled }: CourseSyllabusProps) {
  const [selectedLessonId, setSelectedLessonId] = React.useState<string | null>(
    course.lessons[0]?.id || null
  );

  const selectedLesson = course.lessons.find(
    lesson => lesson.id === selectedLessonId
  );

  const handleLessonComplete = async () => {
    // Auto advance to next lesson
    const currentIndex = course.lessons.findIndex(
      lesson => lesson.id === selectedLessonId
    );
    const nextLesson = course.lessons[currentIndex + 1];
    if (nextLesson) {
      setSelectedLessonId(nextLesson.id);
    }
  };

  const renderLessonList = () => (
    <div className="space-y-2">
      {course.lessons.map((lesson, index) => {
        const isCompleted = course.progress?.completedLessons?.includes(lesson.id);
        const isSelected = lesson.id === selectedLessonId;
        const isLocked = !isEnrolled && index > 0; // Only first lesson free for non-enrolled

        return (
          <Button
            key={lesson.id}
            variant={isSelected ? "default" : "ghost"}
            className={`w-full justify-start ${isLocked ? 'opacity-50' : ''}`}
            onClick={() => !isLocked && setSelectedLessonId(lesson.id)}
            disabled={isLocked}
          >
            <div className="flex items-center gap-3 w-full">
              {isCompleted ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : isLocked ? (
                <Lock className="w-5 h-5" />
              ) : (
                <PlayCircle className="w-5 h-5" />
              )}
              <span className="flex-1 text-left">
                {index + 1}. {lesson.title}
              </span>
              {lesson.duration && (
                <span className="text-sm text-gray-500">
                  {lesson.duration}m
                </span>
              )}
              {isSelected && <ChevronRight className="w-4 h-4" />}
            </div>
          </Button>
        );
      })}
    </div>
  );

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Lesson List */}
      <Card className="md:col-span-1">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4">Course Content</h3>
          {renderLessonList()}
        </CardContent>
      </Card>

      {/* Lesson View */}
      <div className="md:col-span-2">
        {selectedLesson ? (
          isEnrolled || course.lessons[0]?.id === selectedLesson.id ? (
            <LessonView
              lesson={selectedLesson}
              courseId={course.id}
              onComplete={handleLessonComplete}
            />
          ) : (
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Enroll to Access This Lesson
              </h3>
              <p className="text-gray-600 mb-4">
                This lesson is only available for enrolled students.
              </p>
              <Button>Enroll Now</Button>
            </Card>
          )
        ) : (
          <Card className="p-6">
            <p>Select a lesson to begin</p>
          </Card>
        )}
      </div>
    </div>
  );
}