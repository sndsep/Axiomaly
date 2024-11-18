// src/lib/api/courses.ts
import { Course } from '@/types/course'
import { CourseFilters } from '@/types/filters'

interface GetCoursesParams extends CourseFilters {
  search?: string
}

export async function getCourses(filters: { level: string; progress: string }) {
  const params = new URLSearchParams(filters);
  const response = await fetch(`/api/courses?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }

  const data = await response.json();

  // Ensure that `data` is an array. If your API returns { courses: [...] }, return data.courses
  return Array.isArray(data) ? data : data.courses;
}