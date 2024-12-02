// src/types/courses.ts
import { Prisma } from '@prisma/client'

export type CourseWithRelations = Prisma.CourseGetPayload<{
  include: {
    instructor: true;
    category: true;
    resources: true;
    _count: {
      select: { enrollments: true; resources: true; curricula: true };
    };
  };
}>;

export type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'

export interface CourseFilters {
  search?: string
  level?: CourseLevel
  category?: string
}

export interface CourseCreateInput {
  title: string
  description?: string
  thumbnail?: string
  duration?: string
  price?: number
  level: string
  categoryId?: string
  instructorId: string
}