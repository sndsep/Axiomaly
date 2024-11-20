// src/app/api/user/avatar/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { imageUrl } = await req.json();

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: { 
        image: imageUrl,
        onboardingProgress: {
          update: {
            responses: {
              avatarUploaded: true,
              avatarUploadedAt: new Date().toISOString()
            }
          }
        }
      }
    });

    return NextResponse.json({ success: true, user: updatedUser });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}