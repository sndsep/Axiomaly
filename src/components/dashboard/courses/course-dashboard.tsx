// src/components/dashboard/courses/course-dashboard.tsx
'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { CourseFilters } from './course-filters';
import { CourseList } from './course-list';
import { CourseStats } from './course-stats';
import { Button } from '@/components/ui/forms/button';
import { Loader2 } from 'lucide-react';
import type { CourseApiResponse } from '@/lib/api/courses';

export function CourseDashboard() {
  const [filters, setFilters] = useState({
    search: '',
    level: 'all',
    category: 'all',
    sort: 'recent',
    page: 1,
    pageSize: 9,
  });

  const { data, isLoading, isError } = useQuery<CourseApiResponse>({
    queryKey: ['enrolled-courses', filters],
    queryFn: async () => {
      const params = new URLSearchParams(filters as any);
      const res = await fetch(`/api/dashboard/enrolled-courses?${params}`);
      if (!res.ok) throw new Error('Failed to fetch enrolled courses');
      return res.json();
    }
  });

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
        <p className="text-lg font-medium">Error loading courses</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <CourseStats stats={data?.stats || {
        totalStudents: 0,
        averageProgress: 0,
        completionRate: 0,
        averageRating: 0,
        totalDuration: '0h'
      }} />
      
      <CourseFilters
        onFilterChange={(newFilters) => setFilters(f => ({ ...f, ...newFilters, page: 1 }))}
        categories={data?.categories || []}
      />

      {isLoading ? (
        <div className="flex items-center justify-center h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <>
          <CourseList
            courses={data?.courses || []}
            progress={data?.progress || {}}
            onEnroll={async (courseId) => {
              // Add enrollment logic
            }}
            onContinue={(courseId) => {
              // Add continue course logic
            }}
          />

          {data?.totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <Button
                variant="outline"
                disabled={filters.page === 1}
                onClick={() => setFilters(f => ({ ...f, page: f.page - 1 }))}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                disabled={filters.page === data.totalPages}
                onClick={() => setFilters(f => ({ ...f, page: f.page + 1 }))}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}