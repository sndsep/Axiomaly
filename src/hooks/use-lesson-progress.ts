// src/hooks/use-lesson-progress.ts
import { useState, useCallback, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface LessonProgress {
  completed: boolean;
  completedAt: Date | null;
}

export function useLessonProgress(courseId: string, lessonId: string) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Fetch initial progress
  useEffect(() => {
    async function fetchProgress() {
      try {
        const response = await fetch(
          `/api/courses/${courseId}/lessons/${lessonId}/progress`
        );
        
        if (!response.ok) throw new Error('Failed to fetch progress');
        
        const data: LessonProgress = await response.json();
        setIsCompleted(data.completed);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch progress');
        toast({
          title: "Error",
          description: "Failed to load lesson progress",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchProgress();
  }, [courseId, lessonId, toast]);

  // Mark lesson as completed
  const markAsCompleted = useCallback(async () => {
    if (isCompleted) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/courses/${courseId}/lessons/${lessonId}/progress`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ completed: true })
        }
      );

      if (!response.ok) throw new Error('Failed to update progress');

      const data: LessonProgress = await response.json();
      setIsCompleted(data.completed);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update progress');
      throw err; // Re-throw to handle in the component
    } finally {
      setIsLoading(false);
    }
  }, [courseId, lessonId, isCompleted]);

  // Track time spent on lesson
  useEffect(() => {
    const startTime = Date.now();
    let timeoutId: NodeJS.Timeout;

    // Auto-complete after reasonable time spent (e.g., for text lessons)
    const checkTimeSpent = () => {
      const timeSpent = (Date.now() - startTime) / 1000; // convert to seconds
      if (timeSpent >= 30 && !isCompleted) { // 30 seconds as example
        markAsCompleted().catch(() => {
          // Handle error silently - we don't want to interrupt the user
          console.error('Failed to auto-complete lesson');
        });
      }
    };

    // Check every minute
    timeoutId = setInterval(checkTimeSpent, 60000);

    return () => {
      clearInterval(timeoutId);
    };
  }, [isCompleted, markAsCompleted]);

  return {
    isCompleted,
    isLoading,
    error,
    markAsCompleted
  };
}