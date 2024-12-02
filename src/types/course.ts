// src/types/course.ts
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type EnrollmentStatus = 'active' | 'completed' | 'dropped';

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  duration: string;
  level: CourseLevel;
  category: {
    id: string;
    name: string;
  };
  instructor: {
    id: string;
    name: string;
    avatar?: string;
  };
  _count: {
    enrollments: number;
    lessons: number;
  };
  createdAt: Date;
}

export interface CourseProgress {
  courseId: string;
  percentage: number;
  completedLessons: number;
  totalLessons: number;
  lastUpdated: Date;
  status: EnrollmentStatus;
}

export interface CourseFilters {
  search?: string;
  level?: CourseLevel;
  category?: string;
  sort?: 'recent' | 'popular' | 'rating';
  page?: number;
  pageSize?: number;
}

// hooks/use-course-management.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '@/components/ui/hooks/use-toast';

export function useCourseManagement() {
  const queryClient = useQueryClient();

  // Fetch all courses with filters
  const useCourses = (filters: CourseFilters) => {
    return useQuery({
      queryKey: ['courses', filters],
      queryFn: async () => {
        const params = new URLSearchParams(filters as any);
        const res = await fetch(`/api/courses?${params}`);
        if (!res.ok) throw new Error('Failed to fetch courses');
        return res.json();
      }
    });
  };

  // Fetch enrolled courses
  const useEnrolledCourses = (filters: CourseFilters) => {
    return useQuery({
      queryKey: ['enrolled-courses', filters],
      queryFn: async () => {
        const params = new URLSearchParams(filters as any);
        const res = await fetch(`/api/dashboard/enrolled-courses?${params}`);
        if (!res.ok) throw new Error('Failed to fetch enrolled courses');
        return res.json();
      }
    });
  };

  // Course enrollment mutation
  const useEnrollCourse = () => {
    return useMutation({
      mutationFn: async (courseId: string) => {
        const res = await fetch(`/api/courses/${courseId}/enroll`, {
          method: 'POST'
        });
        if (!res.ok) throw new Error('Failed to enroll in course');
        return res.json();
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['enrolled-courses']);
        toast({
          title: "¡Inscripción exitosa!",
          description: "Te has inscrito al curso correctamente."
        });
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Error de inscripción",
          description: error.message
        });
      }
    });
  };

  // Update course progress
  const useUpdateProgress = () => {
    return useMutation({
      mutationFn: async ({ 
        courseId, 
        lessonId, 
        completed 
      }: { 
        courseId: string; 
        lessonId: string; 
        completed: boolean; 
      }) => {
        const res = await fetch(`/api/courses/${courseId}/lessons/${lessonId}/progress`, {
          method: 'PUT',
          body: JSON.stringify({ completed })
        });
        if (!res.ok) throw new Error('Failed to update progress');
        return res.json();
      },
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries(['enrolled-courses']);
        queryClient.invalidateQueries(['course', variables.courseId]);
      }
    });
  };

  return {
    useCourses,
    useEnrolledCourses,
    useEnrollCourse,
    useUpdateProgress
  };
}