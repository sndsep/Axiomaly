// src/app/api/user/avatar/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("avatar") as File;
    
    if (!file) {
      return new NextResponse("No file uploaded", { status: 400 });
    }

    // Ensure upload directory exists
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'avatars');
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Create a unique filename
    const timestamp = Date.now();
    const filename = `${session.user.id}-${timestamp}${path.extname(file.name)}`;
    
    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Full path where the file will be saved
    const filepath = path.join(uploadDir, filename);
    console.log('Saving file to:', filepath);

    // Save file
    await writeFile(filepath, buffer);
    console.log('File saved successfully');

    // Create public URL
    const imageUrl = `/uploads/avatars/${filename}`;

    // Update user with the new avatar URL
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { 
        image: imageUrl,
        updatedAt: new Date()
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        role: true,
        careerPath: true,
        hasCompletedOnboarding: true,
        onboardingProgress: true
      }
    });

    console.log('Updated user data:', updatedUser);

    return NextResponse.json({ 
      success: true, 
      user: updatedUser 
    });

  } catch (error) {
    console.error("Detailed error:", error);
    return new NextResponse(
      JSON.stringify({ 
        error: "Error uploading avatar", 
        details: error.message 
      }), 
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { 
        image: null,
        updatedAt: new Date()
      },
    });

    return NextResponse.json({ 
      success: true, 
      user: updatedUser 
    });

  } catch (error) {
    console.error("Error removing avatar:", error);
    return new NextResponse("Error removing avatar", { status: 500 });
  }
}