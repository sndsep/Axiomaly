// src/hooks/use-instructor-analytics.ts
import { useState, useEffect } from 'react';

interface CourseStats {
  totalStudents: number;
  completedCount: number;
  completionRate: number;
  averageProgress: number;
}

interface StudentData {
  id: string;
  name: string;
  email: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  lastAccessed?: Date;
}

interface LessonStats {
  id: string;
  title: string;
  completions: number;
  completionRate: number;
  averageTime: number;
}

interface AnalyticsData {
  courseStats: CourseStats;
  students: StudentData[];
  lessonStats: LessonStats[];
}

export function useInstructorAnalytics(courseId: string) {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const response = await fetch(`/api/courses/${courseId}/analytics`);
        if (!response.ok) throw new Error('Failed to fetch analytics');
        
        const analyticsData = await response.json();
        setData(analyticsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load analytics');
      } finally {
        setIsLoading(false);
      }
    }

    fetchAnalytics();
  }, [courseId]);

  return {
    data,
    isLoading,
    error,
    // Computed values for easy access
    stats: data?.courseStats,
    studentCount: data?.students.length ?? 0,
    completionRate: data?.courseStats.completionRate ?? 0,
    averageProgress: data?.courseStats.averageProgress ?? 0,
  };
}

// Test helper - podemos usar esto para verificar el hook
if (process.env.NODE_ENV === 'test') {
  export const mockAnalyticsData: AnalyticsData = {
    courseStats: {
      totalStudents: 10,
      completedCount: 3,
      completionRate: 30,
      averageProgress: 45,
    },
    students: [
      {
        id: '1',
        name: 'Test Student',
        email: 'test@example.com',
        progress: 60,
        completedLessons: 3,
        totalLessons: 5,
        lastAccessed: new Date(),
      }
    ],
    lessonStats: [
      {
        id: '1',
        title: 'Lesson 1',
        completions: 8,
        completionRate: 80,
        averageTime: 45,
      }
    ],
  };
}