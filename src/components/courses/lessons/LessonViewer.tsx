// src/components/courses/lessons/LessonViewer.tsx
'use client';

import React from 'react';
import { Lesson } from '@prisma/client';
import { VideoLesson } from './types/VideoLesson';
import { TextLesson } from './types/TextLesson';
import { QuizLesson } from './types/QuizLesson';
import { AssignmentLesson } from './types/AssignmentLesson';
import { ProjectLesson } from './types/ProjectLesson';
import { Card } from '@/components/ui/forms/card';
import { useToast } from '@/components/ui/hooks/use-toast';
import { useLessonProgress } from '@/hooks/use-lesson-progress';

interface LessonViewerProps {
  lesson: Lesson;
  courseId: string;
  onComplete?: () => void;
}

export function LessonViewer({ lesson, courseId, onComplete }: LessonViewerProps) {
  const { toast } = useToast();
  const { markAsCompleted, isCompleted, isLoading } = useLessonProgress(courseId, lesson.id);

  const handleComplete = async () => {
    try {
      await markAsCompleted();
      onComplete?.();
      toast({
        title: "Progress saved",
        description: "Lesson marked as completed",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save progress",
        variant: "destructive",
      });
    }
  };

  const renderLessonContent = () => {
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

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
        {lesson.description && (
          <p className="text-gray-600">{lesson.description}</p>
        )}
      </div>
      
      {renderLessonContent()}
    </Card>
  );
}