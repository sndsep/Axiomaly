// src/app/api/dashboard/enrolled-courses/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const enrolledCourses = await prisma.enrollment.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        course: true,
      },
    });

    return NextResponse.json(enrolledCourses);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch enrolled courses" },
      { status: 500 }
    );
  }
}