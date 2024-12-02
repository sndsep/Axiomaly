// src/components/courses/management/CourseManagement.tsx
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CourseCard } from '../cards/course-card'
import { CourseGrid } from '../list/course-grid'
import { CourseFilters } from '../filters/course-filters'
import { CourseStats } from '../stats/course-stats'
import { CourseSort } from '../filters/course-sort'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '@/components/ui/forms/select'
import { useState } from 'react'
import { Search, Grid, List } from 'lucide-react'

interface CourseManagementProps {
  initialData?: {
    courses: any[]
    totalCourses: number
    stats: {
      totalStudents: number
      avgRating: number
      totalHours: number
    }
  }
}

export const CourseManagement = ({ initialData }: CourseManagementProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    level: '',
    category: '',
    duration: '',
    rating: '',
  })
  const [sorting, setSorting] = useState({
    field: 'createdAt',
    order: 'desc'
  })

  // Pagination state
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(12)

  // Loading states
  const [isLoading, setIsLoading] = useState(false)
  const [courses, setCourses] = useState(initialData?.courses || [])
  const [stats, setStats] = useState(initialData?.stats || {
    totalStudents: 0,
    avgRating: 0,
    totalHours: 0
  })

  const handleSearch = React.useCallback((term: string) => {
    setSearchTerm(term)
    // Update URL params
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('search', term)
    } else {
      params.delete('search')
    }
    router.push(`?${params.toString()}`)
  }, [router, searchParams])

  const handleFilterChange = React.useCallback((key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
    // Update URL params
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`?${params.toString()}`)
  }, [router, searchParams])

  const handleSortChange = React.useCallback((value: string) => {
    const [field, order] = value.split('-')
    setSorting({ field, order })
    // Update URL params
    const params = new URLSearchParams(searchParams)
    params.set('sort', value)
    router.push(`?${params.toString()}`)
  }, [router, searchParams])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Stats Section */}
      <CourseStats stats={stats} />

      {/* Filters and Search */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full"
              prefix={<Search className="w-4 h-4 text-muted-foreground" />}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <CourseFilters 
            filters={filters}
            onChange={handleFilterChange}
          />
          <CourseSort
            value={`${sorting.field}-${sorting.order}`}
            onChange={handleSortChange}
          />
          <Select 
            value={perPage.toString()}
            onValueChange={(value) => setPerPage(parseInt(value))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Items per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12 per page</SelectItem>
              <SelectItem value="24">24 per page</SelectItem>
              <SelectItem value="48">48 per page</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Course Grid/List */}
      <CourseGrid
        courses={courses}
        layout={viewMode}
        isLoading={isLoading}
      />

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        {/* Add pagination component here */}
      </div>
    </div>
  )
}