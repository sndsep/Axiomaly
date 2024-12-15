// src/components/courses/lessons/LessonView.tsx
'use client';

import React from 'react';
import { VideoLesson } from './types/VideoLesson';
import { TextLesson } from './types/TextLesson';
import { QuizLesson } from './types/QuizLesson';
import { AssignmentLesson } from './types/AssignmentLesson';
import { ProjectLesson } from './types/ProjectLesson';
import { Card } from '@/components/ui/forms/card';
import { useLessonProgress } from '@/hooks/use-lesson-progress';
import type { Lesson } from '@prisma/client';

interface LessonViewProps {
  lesson: Lesson;
  courseId: string;
  onComplete?: () => void;
}

export function LessonView({ lesson, courseId, onComplete }: LessonViewProps) {
  const { isCompleted, markAsCompleted, isLoading } = useLessonProgress(
    courseId,
    lesson.id
  );

  const handleComplete = async () => {
    await markAsCompleted();
    onComplete?.();
  };

  if (isLoading) {
    return <Card className="p-6">Loading lesson...</Card>;
  }

  const renderLesson = () => {
    switch (lesson.type) {
      case 'VIDEO':
        return (
          <VideoLesson
            videoUrl={lesson.videoUrl!}
            onComplete={handleComplete}
            isCompleted={isCompleted}
          />
        );

      case 'TEXT':
        return (
          <TextLesson
            content={lesson.content!}
            onComplete={handleComplete}
            isCompleted={isCompleted}
          />
        );

      case 'QUIZ':
        return (
          <QuizLesson
            quizData={lesson.quizData as any}
            onComplete={handleComplete}
            isCompleted={isCompleted}
          />
        );

      case 'ASSIGNMENT':
        return (
          <AssignmentLesson
            assignment={lesson.assignment as any}
            onComplete={handleComplete}
            isCompleted={isCompleted}
          />
        );

      case 'PROJECT':
        return (
          <ProjectLesson
            project={lesson.assignment as any}
            onComplete={handleComplete}
            isCompleted={isCompleted}
          />
        );

      default:
        return <div>Unsupported lesson type</div>;
    }
  };

  return renderLesson();
}