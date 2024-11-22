// src/app/api/onboarding/profile/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse(
        JSON.stringify({ message: 'Unauthorized' }), 
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: body.name,
        bio: body.bio,
        onboardingProgress: {
          update: {
            currentStep: 'TOUR',
            responses: {
              profileCompleted: true,
              ...body
            }
          }
        }
      },
      include: {
        onboardingProgress: true
      }
    });

    return new NextResponse(
      JSON.stringify({ success: true, user: updatedUser }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}