import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const completedCredits = await prisma.credit.count({ where: { completed: true } });
    const totalCredits = await prisma.credit.count();
    const currentCourse = await prisma.course.findFirst({ where: { active: true } });
    const upcomingDeadlines = await prisma.deadline.findMany({ where: { dueDate: { gte: new Date() } } });
    const recentActivities = await prisma.activity.findMany({ orderBy: { timestamp: 'desc' }, take: 5 });

    return NextResponse.json({
      completedCredits,
      totalCredits,
      currentCourse,
      upcomingDeadlines,
      recentActivities,
    });
  } catch (error) {
    return NextResponse.error();
  }
}
