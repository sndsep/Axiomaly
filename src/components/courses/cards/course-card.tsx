// src/components/courses/course-card.tsx
import { useProgress } from '@/hooks/use-progress';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";
import { Button } from "@/components/ui/forms/button";
import { Progress } from "@/components/ui/forms/progress";
import { Clock, Award, PlayCircle, BookOpen, Users, Loader2 } from "lucide-react";
import Image from "next/image";
import type { Course, CourseProgress } from "@/types/course";

interface CourseCardProps {
  course: Course;
  progress?: CourseProgress;
  onEnroll?: (courseId: string) => void;
  onContinue?: (courseId: string) => void;
  onProgressUpdate?: (progress: CourseProgress) => void;
  loading?: boolean;
}

export function CourseCard({
  course,
  progress,
  onEnroll,
  onContinue,
  onProgressUpdate,
  loading = false,
}: CourseCardProps) {
  const isEnrolled = Boolean(progress);
  const { isUpdating, updateProgress } = useProgress({
    onSuccess: onProgressUpdate
  });

  const handleAction = () => {
    if (isEnrolled) {
      if (onProgressUpdate) {
        updateProgress(course.id, (progress?.percentage || 0) + 10);
      } else {
        onContinue?.(course.id);
      }
    } else {
      onEnroll?.(course.id);
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200">
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        {course.thumbnail ? (
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
            <BookOpen className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
        {course.level && (
          <span className="absolute top-2 right-2 text-xs px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full">
            {course.level}
          </span>
        )}
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2">{course.title}</CardTitle>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          {course.duration && (
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {course.duration}
            </span>
          )}
          <span className="flex items-center">
            <BookOpen className="mr-1 h-4 w-4" />
            {course._count?.lessons || 0} lessons
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            {course.instructor.avatar && (
              <Image
                src={course.instructor.avatar}
                alt={course.instructor.name}
                width={24}
                height={24}
                className="rounded-full"
              />
            )}
            <span className="text-muted-foreground">
              by {course.instructor.name}
            </span>
          </div>
          {course._count?.enrollments > 0 && (
            <div className="flex items-center text-muted-foreground">
              <Users className="mr-1 h-4 w-4" />
              {course._count.enrollments}
            </div>
          )}
        </div>

        {progress && (
          <div className="space-y-2">
            <Progress value={progress.percentage} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{progress.percentage}% complete</span>
              {progress.completedLessons && progress.totalLessons && (
                <span>
                  {progress.completedLessons}/{progress.totalLessons} lessons
                </span>
              )}
            </div>
          </div>
        )}

        <Button
          className="w-full"
          onClick={handleAction}
          disabled={loading || isUpdating || progress?.percentage === 100}
        >
          {loading || isUpdating ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : isEnrolled ? (
            <>
              <PlayCircle className="mr-2 h-4 w-4" />
              {progress?.percentage === 100 ? 'Completed' : 'Continue Learning'}
            </>
          ) : (
            <>
              <BookOpen className="mr-2 h-4 w-4" />
              Enroll Now
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}