// src/app/api/courses/[courseId]/engagement/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { EngagementService } from '@/lib/services/engagement-service';

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const days = parseInt(searchParams.get('days') ?? '30');

    const metrics = await EngagementService.getEngagementMetrics(
      params.courseId,
      days
    );

    return NextResponse.json(metrics);

  } catch (error) {
    console.error('[ENGAGEMENT_METRICS]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}