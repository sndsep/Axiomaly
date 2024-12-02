// src/components/courses/cards/course-preview-card.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";
import { BookOpen, Users, Clock } from "lucide-react";
import Image from "next/image";
import type { Course } from "@/types/course";

interface CoursePreviewCardProps {
  course: Course;
  onClick?: (courseId: string) => void;
}

export function CoursePreviewCard({ course, onClick }: CoursePreviewCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-md transition-all"
      onClick={() => onClick?.(course.id)}
    >
      <div className="relative aspect-video">
        {course.thumbnail ? (
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-secondary/10 flex items-center justify-center rounded-t-lg">
            <BookOpen className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
        <span className="absolute top-2 right-2 text-xs px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full">
          {course.level}
        </span>
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-1">{course.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {course.duration}
            </span>
            <span className="flex items-center">
              <Users className="mr-1 h-4 w-4" />
              {course._count.enrollments}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}