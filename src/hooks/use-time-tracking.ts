// src/hooks/use-time-tracking.ts
import { useEffect, useRef } from 'react';

interface TimeTrackingOptions {
  courseId: string;
  lessonId: string;
  minTimeToCount?: number; // minimum seconds before counting time
  maxInactiveTime?: number; // maximum seconds of inactivity before pausing
}

export function useTimeTracking({
  courseId,
  lessonId,
  minTimeToCount = 5,
  maxInactiveTime = 300
}: TimeTrackingOptions) {
  const startTimeRef = useRef<number>(Date.now());
  const lastActivityRef = useRef<number>(Date.now());
  const isTracking = useRef(true);

  // Track user activity
  useEffect(() => {
    function updateLastActivity() {
      lastActivityRef.current = Date.now();
      if (!isTracking.current) {
        isTracking.current = true;
        startTimeRef.current = Date.now();
      }
    }

    // Track mouse and keyboard activity
    window.addEventListener('mousemove', updateLastActivity);
    window.addEventListener('keypress', updateLastActivity);
    window.addEventListener('click', updateLastActivity);
    window.addEventListener('scroll', updateLastActivity);

    return () => {
      window.removeEventListener('mousemove', updateLastActivity);
      window.removeEventListener('keypress', updateLastActivity);
      window.removeEventListener('click', updateLastActivity);
      window.removeEventListener('scroll', updateLastActivity);
    };
  }, []);

  // Send time updates periodically
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    async function sendTimeUpdate() {
      const now = Date.now();
      const inactiveTime = now - lastActivityRef.current;

      // Stop tracking if user has been inactive
      if (inactiveTime > maxInactiveTime * 1000) {
        isTracking.current = false;
        return;
      }

      // Calculate time spent
      const timeSpent = Math.floor((now - startTimeRef.current) / 1000);
      
      // Only send update if we've spent minimum time
      if (timeSpent >= minTimeToCount) {
        try {
          await fetch(`/api/courses/${courseId}/lessons/${lessonId}/time`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ timeSpent })
          });
          // Reset start time after successful update
          startTimeRef.current = now;
        } catch (error) {
          console.error('Failed to update time spent:', error);
        }
      }
    }

    // Send updates every minute
    intervalId = setInterval(sendTimeUpdate, 60000);

    return () => {
      clearInterval(intervalId);
      // Send final update when unmounting
      sendTimeUpdate();
    };
  }, [courseId, lessonId, minTimeToCount, maxInactiveTime]);
}

