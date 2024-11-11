// src/components/dashboard/courses/course-filters.tsx
'use client'

import { CourseFilters as CourseFiltersType } from '@/types/filters'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/forms/select"

interface CourseFiltersProps {
  onFilterChange: (filters: Partial<CourseFiltersType>) => void
  currentFilters: CourseFiltersType
}

export function CourseFilters({ onFilterChange, currentFilters }: CourseFiltersProps) {
  return (
    <div className="flex gap-4">
      <Select
        value={currentFilters.level}
        onValueChange={(value) => onFilterChange({ level: value as CourseFiltersType['level'] })}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Nivel" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos los niveles</SelectItem>
          <SelectItem value="beginner">Principiante</SelectItem>
          <SelectItem value="intermediate">Intermedio</SelectItem>
          <SelectItem value="advanced">Avanzado</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={currentFilters.progress}
        onValueChange={(value) => onFilterChange({ progress: value as CourseFiltersType['progress'] })}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Progreso" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todo el progreso</SelectItem>
          <SelectItem value="not-started">No comenzados</SelectItem>
          <SelectItem value="in-progress">En progreso</SelectItem>
          <SelectItem value="completed">Completados</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}