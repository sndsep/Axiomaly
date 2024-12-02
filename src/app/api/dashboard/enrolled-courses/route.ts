// src/app/api/dashboard/enrolled-courses/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const params = {
      search: searchParams.get('search') || '',
      level: searchParams.get('level') || 'all',
      category: searchParams.get('category') || 'all',
      sort: searchParams.get('sort') || 'recent',
      page: Number(searchParams.get('page')) || 1,
      pageSize: Number(searchParams.get('pageSize')) || 9,
    };

    const where = {
      enrollments: {
        some: {
          userId: session.user.id
        }
      },
      AND: [
        params.search ? {
          OR: [
            { title: { contains: params.search, mode: 'insensitive' } },
            { description: { contains: params.search, mode: 'insensitive' } },
          ],
        } : {},
        params.level !== 'all' ? { level: params.level } : {},
        params.category !== 'all' ? { categoryId: params.category } : {},
      ],
    };

    const [courses, totalCourses] = await Promise.all([
      prisma.course.findMany({
        where,
        include: {
          instructor: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
          category: true,
          _count: {
            select: { 
              enrollments: true,
              resources: true,
              curricula: true
            },
          },
        },
        take: params.pageSize,
        skip: params.pageSize * (params.page - 1)
      }),
      prisma.course.count({ where }),
    ]);

    // Obtener el progreso del estudiante para estos cursos
    const progress = await prisma.studentProgress.findMany({
      where: {
        userId: session.user.id,
        courseId: { in: courses.map(c => c.id) },
      },
    });

    return NextResponse.json({
      courses,
      progress: Object.fromEntries(
        progress.map(p => [p.courseId, {
          percentage: p.progress,
          lastUpdated: p.lastUpdated
        }])
      ),
      totalPages: Math.ceil(totalCourses / params.pageSize),
      totalCourses,
    });

  } catch (error) {
    console.error('Enrolled Courses API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}