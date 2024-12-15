// src/hooks/use-instructor-analytics.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { useInstructorAnalytics, mockAnalyticsData } from './use-instructor-analytics';

// Mock fetch globally
global.fetch = jest.fn();

describe('useInstructorAnalytics', () => {
  beforeEach(() => {
    // Clear mock before each test
    (global.fetch as jest.Mock).mockClear();
  });

  it('should fetch and return analytics data', async () => {
    // Mock successful API response
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockAnalyticsData),
      })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useInstructorAnalytics('test-course-id')
    );

    // Initial state
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.data).toBe(null);

    // Wait for data to load
    await waitForNextUpdate();

    // Check final state
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.data).toEqual(mockAnalyticsData);
    expect(result.current.stats).toEqual(mockAnalyticsData.courseStats);
    expect(result.current.studentCount).toBe(mockAnalyticsData.students.length);
    expect(result.current.completionRate).toBe(mockAnalyticsData.courseStats.completionRate);
  });

  it('should handle API errors', async () => {
    // Mock failed API response
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 500,
      })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useInstructorAnalytics('test-course-id')
    );

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe('Failed to fetch analytics');
    expect(result.current.data).toBe(null);
  });
});
