// src/app/api/user/profile/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
     import { authOptions } from '@/lib/auth';
     import { prisma } from '@/lib/prisma';

     export async function POST(req: Request) {
       try {
         const session = await getServerSession(authOptions);
         if (!session?.user?.id) {
           return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
         }

         const body = await req.json();
         const { name, email, bio } = body;

         // Save the profile data to the database
         const updatedUser = await prisma.user.update({
           where: { id: session.user.id },
           data: { name, email, bio },
         });

         return NextResponse.json({ success: true, user: updatedUser });
       } catch (error) {
         console.error('Error saving profile:', error);
         return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
       }
     }