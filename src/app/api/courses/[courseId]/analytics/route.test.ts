// src/app/api/courses/[courseId]/analytics/route.test.ts
import { GET } from './route';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { createMocks } from 'node-mocks-http';

// Mock prisma
jest.mock('@/lib/prisma', () => ({
  course: {
    findUnique: jest.fn(),
  },
  enrollment: {
    findMany: jest.fn(),
  },
  lesson: {
    findMany: jest.fn(),
  },
  studentProgress: {
    findMany: jest.fn(),
  },
}));

// Mock auth
jest.mock('next-auth', () => ({
  getServerSession: jest.fn(() => ({
    user: { id: 'test-instructor-id', role: 'INSTRUCTOR' }
  }))
}));

describe('Course Analytics API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return course analytics for instructor', async () => {
    // Mock course verification
    (prisma.course.findUnique as jest.Mock).mockResolvedValueOnce({
      instructorId: 'test-instructor-id'
    });

    // Mock enrollments data
    (prisma.enrollment.findMany as jest.Mock).mockResolvedValueOnce([
      {
        user: { id: 'student-1', name: 'Student 1', email: 'student1@test.com' },
        status: 'COMPLETED',
        updatedAt: new Date(),
        lessonProgress: [
          { completed: true, lesson: { id: 'lesson-1' } },
          { completed: false, lesson: { id: 'lesson-2' } }
        ]
      }
    ]);

    // Mock lesson data
    (prisma.lesson.findMany as jest.Mock).mockResolvedValueOnce([
      {
        id: 'lesson-1',
        title: 'Lesson 1',
        _count: { progress: 1 }
      },
      {
        id: 'lesson-2',
        title: 'Lesson 2',
        _count: { progress: 0 }
      }
    ]);

    // Mock progress data
    (prisma.studentProgress.findMany as jest.Mock).mockResolvedValueOnce([
      { progress: 50 }
    ]);

    const { req } = createMocks({
      method: 'GET',
    });

    const response = await GET(req, { params: { courseId: 'test-course-id' } });
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({
      courseStats: {
        totalStudents: 1,
        completedCount: 1,
        completionRate: 100,
        averageProgress: 50
      },
      students: [
        {
          id: 'student-1',
          name: 'Student 1',
          email: 'student1@test.com',
          progress: 50,
          completedLessons: 1,
          totalLessons: 2,
          lastAccessed: expect.any(String)
        }
      ],
      lessonStats: [
        {
          id: 'lesson-1',
          title: 'Lesson 1',
          completions: 1,
          completionRate: 100,
          averageTime: 0
        },
        {
          id: 'lesson-2',
          title: 'Lesson 2',
          completions: 0,
          completionRate: 0,
          averageTime: 0
        }
      ]
    });
  });

  it('should return 401 for unauthenticated requests', async () => {
    // Mock no session
    require('next-auth').getServerSession.mockResolvedValueOnce(null);

    const { req } = createMocks({
      method: 'GET',
    });

    const response = await GET(req, { params: { courseId: 'test-course-id' } });
    expect(response.status).toBe(401);
  });

  it('should return 403 for non-instructor access', async () => {
    // Mock course with different instructor
    (prisma.course.findUnique as jest.Mock).mockResolvedValueOnce({
      instructorId: 'different-instructor-id'
    });

    const { req } = createMocks({
      method: 'GET',
    });

    const response = await GET(req, { params: { courseId: 'test-course-id' } });
    expect(response.status).toBe(403);
  });
});