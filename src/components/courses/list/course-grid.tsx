// src/components/courses/list/course-grid.tsx
import { CourseCard } from "../cards/course-card";
import { CoursePreviewCard } from "../cards/course-preview-card";
import { useCourseManagement } from "@/hooks/use-course-management";
import type { CourseFilters } from "@/types/course";

interface CourseGridProps {
  filters: CourseFilters;
  layout?: "grid" | "list";
  variant?: "full" | "preview";
  onCourseClick?: (courseId: string) => void;
}

export function CourseGrid({ 
  filters, 
  layout = "grid",
  variant = "full",
  onCourseClick 
}: CourseGridProps) {
  const { useCoursesList, useEnrollCourse } = useCourseManagement();
  
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useCoursesList(filters);

  const enrollMutation = useEnrollCourse();

  if (isLoading) {
    return (
      <div className={`grid gap-6 ${
        layout === "grid" 
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
          : "grid-cols-1"
      }`}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-[300px] rounded-lg bg-secondary/10 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          Failed to load courses. Please try again later.
        </p>
      </div>
    );
  }

  const courses = data?.pages.flatMap(page => page.courses) ?? [];

  if (!courses.length) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          No courses found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className={`grid gap-6 ${
        layout === "grid" 
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
          : "grid-cols-1"
      }`}>
        {courses.map((course) => (
          variant === "full" ? (
            <CourseCard
              key={course.id}
              course={course}
              onEnroll={async (courseId) => {
                await enrollMutation.mutateAsync(courseId);
              }}
              onContinue={onCourseClick}
              loading={enrollMutation.isLoading}
            />
          ) : (
            <CoursePreviewCard
              key={course.id}
              course={course}
              onClick={onCourseClick}
            />
          )
        ))}
      </div>

      {hasNextPage && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              'Load More Courses'
            )}
          </Button>
        </div>
      )}
    </div>
  );
}