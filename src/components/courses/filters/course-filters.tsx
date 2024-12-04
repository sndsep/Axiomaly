// src/components/courses/filters/course-filters.tsx
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/forms/select"
import { Input } from "@/components/ui/forms/input"
import { type CourseFilters as FilterTypes } from '@/types/courses'

interface CourseFiltersProps {
  currentFilters: FilterTypes;
  onFilterChange: (filters: FilterTypes) => void;
}

export function CourseFilters({ currentFilters, onFilterChange }: CourseFiltersProps) {
  const levelOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'BEGINNER', label: 'Beginner' },
    { value: 'INTERMEDIATE', label: 'Intermediate' },
    { value: 'ADVANCED', label: 'Advanced' },
  ]

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: '3d-modeling', label: '3D Modeling' },
    { value: 'animation', label: 'Animation' },
    { value: 'vfx', label: 'VFX' },
    { value: 'rendering', label: 'Rendering' },
  ]

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
      <div className="flex-1">
        <Input
          placeholder="Search courses..."
          className="max-w-sm"
          value={currentFilters.search}
          onChange={(e) => onFilterChange({ ...currentFilters, search: e.target.value })}
        />
      </div>
      
      <div className="flex gap-4">
        <Select
          value={currentFilters.level}
          onValueChange={(value) => onFilterChange({ ...currentFilters, level: value })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Level" />
          </SelectTrigger>
          <SelectContent>
            {levelOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={currentFilters.category}
          onValueChange={(value) => onFilterChange({ ...currentFilters, category: value })}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categoryOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}