// hooks/use-course-management.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/hooks/use-toast';
import type { CourseFilters, Course, CourseProgress } from '@/types/course';

export function useCourseManagement() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

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

  const useEnrollCourse = () => {
    return useMutation({
      mutationFn: async (courseId: string) => {
        const res = await fetch(`/api/courses/${courseId}/enroll`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || 'Failed to enroll in course');
        }

        return res.json();
      },
      onSuccess: (_, courseId) => {
        queryClient.invalidateQueries(['enrolled-courses']);
        queryClient.invalidateQueries(['courses']);
        
        toast({
          title: "¡Inscripción exitosa!",
          description: "Te has inscrito al curso correctamente.",
        });
      },
      onError: (error: Error) => {
        toast({
          variant: "destructive",
          title: "Error de inscripción",
          description: error.message,
        });
      },
    });
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
    useEnrollCourse,
    useCourseProgress,
  };
}