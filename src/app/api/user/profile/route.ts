// src/app/api/user/profile/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

const profileSchema = z.object({
  fullName: z.string().min(2),
  displayName: z.string().min(2),
  bio: z.string().max(300).optional(),
  location: z.string().optional(),
  linkedin: z.string().url().optional().or(z.literal('')),
  github: z.string().url().optional().or(z.literal('')),
  website: z.string().url().optional().or(z.literal(''))
});

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const data = profileSchema.parse(body);

    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: data.fullName,
        displayName: data.displayName,
        bio: data.bio,
        location: data.location,
        socials: {
          linkedin: data.linkedin,
          github: data.github,
          website: data.website
        },
        onboardingProgress: {
          update: {
            currentStep: 'TOUR',
            responses: {
              profileCompleted: true
            }
          }
        }
      },
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Profile update error:', error);
    
    if (error instanceof z.ZodError) {
      return new NextResponse('Invalid profile data', { status: 400 });
    }

    return new NextResponse('Internal server error', { status: 500 });
  }
}