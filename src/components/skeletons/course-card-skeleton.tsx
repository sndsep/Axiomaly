// src/components/skeletons/course-card-skeleton.tsx

import { Card, CardContent, CardHeader } from '@/components/ui/forms/card'
import { Skeleton } from '@/components/ui/forms/skeleton'

export function CourseCardSkeleton() {
  return (
    <Card className="h-full">
      <Skeleton className="h-48 rounded-t-lg" />
      
      <CardHeader>
        <div className="space-y-2">
          <Skeleton className="h-6 w-4/5" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <Skeleton className="h-16" />
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-2" />
            <Skeleton className="h-3 w-1/2" />
          </div>

          <div className="flex justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}