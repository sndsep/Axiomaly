// src/app/(auth)/onboarding/degree-program/curriculum/loading.tsx
// This component displays a loading skeleton while the curriculum is being generated

import { Card, CardContent } from '@/components/ui/forms/card';
import { Skeleton } from '@/components/ui/forms/skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header Skeleton */}
      <div className="max-w-5xl mx-auto mb-8">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Term Cards Skeleton */}
      <div className="space-y-6 max-w-5xl mx-auto">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-16" />
              </div>
              <div className="space-y-4">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="p-3 bg-gray-50 rounded-lg">
                    <Skeleton className="h-5 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Buttons Skeleton */}
      <div className="max-w-5xl mx-auto mt-8">
        <Card>
          <CardContent className="p-8">
            <div className="space-y-4 text-center">
              <Skeleton className="h-6 w-48 mx-auto" />
              <Skeleton className="h-4 w-64 mx-auto" />
              <div className="flex justify-center gap-4">
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}