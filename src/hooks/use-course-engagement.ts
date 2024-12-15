// src/hooks/use-course-engagement.ts
import { useState, useEffect } from 'react';

interface UseEngagementOptions {
  days?: number;
  refreshInterval?: number;
}

export function useCourseEngagement(courseId: string, options: UseEngagementOptions = {}) {
  const { days = 30, refreshInterval = 300000 } = options;
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    async function fetchEngagementData() {
      try {
        const response = await fetch(
          `/api/courses/${courseId}/engagement?days=${days}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch engagement data');
        }

        const data = await response.json();
        setData(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    }

    fetchEngagementData();

    if (refreshInterval > 0) {
      intervalId = setInterval(fetchEngagementData, refreshInterval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [courseId, days, refreshInterval]);

  return {
    data,
    isLoading,
    error,
    // Computed properties for easy access
    activeStudents: data?.activeStudents ?? 0,
    averageEngagement: data?.averageEngagementScore ?? 0,
    riskStudents: data?.riskStudents ?? [],
    dailyEngagement: data?.dailyEngagement ?? [],
    studentsEngagement: data?.studentsEngagement ?? []
  };
}