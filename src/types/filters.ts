// src/types/filters.ts
export interface CourseFilters {
    level: 'all' | 'beginner' | 'intermediate' | 'advanced'
    progress: 'all' | 'not-started' | 'in-progress' | 'completed'
    category?: string
  }