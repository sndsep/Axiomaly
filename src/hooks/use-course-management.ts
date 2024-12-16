// hooks/use-course-management.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/hooks/use-toast';
import type { CourseFilters, Course, CourseProgress } from '@/types/course';
import { useState } from 'react';

export function useCourseManagement() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const useCoursesList = (filters: CourseFilters = {}) => {
    return useQuery({
      queryKey: ['courses', filters],
      queryFn: async () => {
        const params = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          if (value) params.append(key, value.toString());
        });

        const res = await fetch(`/api/courses?${params}`);
        if (!res.ok) throw new Error('Failed to fetch courses');
        return res.json();
      },
      staleTime: 1000 * 60 * 5, // 5 minutes
    });
  };

  const useEnrolledCourses = (filters: CourseFilters = {}) => {
    return useQuery({
      queryKey: ['enrolled-courses', filters],
      queryFn: async () => {
        const params = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          if (value) params.append(key, value.toString());
        });

        const res = await fetch(`/api/dashboard/enrolled-courses?${params}`);
        if (!res.ok) throw new Error('Failed to fetch enrolled courses');
        return res.json();
      },
      staleTime: 1000 * 60 * 5, // 5 minutes
    });
  };

  const enrollInCourse = async (courseId: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/courses/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseId }),
      });

      if (!response.ok) {
        throw new Error('Failed to enroll in course');
      }

      toast.success('Successfully enrolled in course');
    } catch (err) {
      setError('An error occurred while enrolling in the course');
      toast.error('Failed to enroll in course');
    } finally {
      setIsLoading(false);
    }
  };

  const useCourseProgress = (courseId: string) => {
    return useQuery({
      queryKey: ['course-progress', courseId],
      queryFn: async () => {
        const res = await fetch(`/api/courses/${courseId}/progress`);
        if (!res.ok) throw new Error('Failed to fetch course progress');
        return res.json();
      },
      enabled: !!courseId,
    });
  };

  return {
    useCoursesList,
    useEnrolledCourses,
    enrollInCourse,
    useCourseProgress,
    isLoading,
    error,
  };
}