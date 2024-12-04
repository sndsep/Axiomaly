// src/components/courses/list/course-pagination.tsx

import React from 'react'
import { Button } from '@/components/ui/forms/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CoursePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function CoursePagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: CoursePaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
  // Show max 5 pages with ellipsis
  const getVisiblePages = () => {
    if (totalPages <= 5) return pages
    
    if (currentPage <= 3) return [...pages.slice(0, 5), '...', totalPages]
    if (currentPage >= totalPages - 2) return [1, '...', ...pages.slice(-5)]
    
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages
    ]
  }

  return (
    <nav className="flex justify-center items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      {getVisiblePages().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-3 py-2">...</span>
          ) : (
            <Button
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(page as number)}
              disabled={currentPage === page}
            >
              {page}
            </Button>
          )}
        </React.Fragment>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </nav>
  )
}