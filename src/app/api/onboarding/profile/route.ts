// src/app/api/onboarding/profile/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { profileSchema } from '@/lib/validators/profile';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    // Get session
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return new NextResponse(
        JSON.stringify({ message: 'Unauthorized' }), 
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Parse request body
    let body;
    try {
      body = await req.json();
      console.log('Received request body:', body);
    } catch (error) {
      console.error('Error parsing request body:', error);
      return new NextResponse(
        JSON.stringify({ message: 'Invalid request body' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Update user profile
    try {
      const updatedUser = await prisma.user.update({
        where: { email: session.user.email },
        data: {
          name: body.name,
          bio: body.bio,
          onboardingProgress: {
            update: {
              responses: {
                profileCompleted: true
              }
            }
          }
        }
      });

      return new NextResponse(
        JSON.stringify({ 
          message: 'Profile updated successfully',
          user: updatedUser 
        }), 
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );

    } catch (error) {
      console.error('Database error:', error);
      return new NextResponse(
        JSON.stringify({ message: 'Failed to update profile' }), 
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

  } catch (error) {
    console.error('Server error:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Internal server error' }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}