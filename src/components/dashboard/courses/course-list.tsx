// src/components/dashboard/courses/course-list.tsx
import { CourseCard } from '@/components/course/course-card';
import type { Course } from '@/types/course';
import type { CourseProgress } from '@/lib/api/courses';

interface CourseListProps {
  courses: Course[];
  progress: Record<string, CourseProgress>;
  onEnroll?: (courseId: string) => Promise<void>;
  onContinue?: (courseId: string) => void;
}

export function CourseList({
  courses,
  progress,
  onEnroll,
  onContinue
}: CourseListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          progress={progress[course.id]}
          onEnroll={onEnroll}
          onContinue={onContinue}
        />
      ))}
    </div>
  );
}