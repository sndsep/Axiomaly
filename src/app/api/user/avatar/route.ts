// src/app/api/user/avatar/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";  // Actualizada la importación

export async function POST(req: Request) {
  try {
    console.log("[API] Starting avatar upload");
    const session = await getServerSession(authOptions);
    console.log("[API] Session:", session);

    if (!session?.user?.email) {
      console.log("[API] No authenticated user found");
      return NextResponse.json(
        { message: "Unauthorized" }, 
        { status: 401 }
      );
    }

    const formData = await req.formData();
    console.log("[API] FormData received");

    const file = formData.get("avatar");
    if (!file || !(file instanceof File)) {
      console.log("[API] No valid file found in request");
      return NextResponse.json(
        { message: "No valid file uploaded" }, 
        { status: 400 }
      );
    }

    // Validate file
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { message: "File must be an image" }, 
        { status: 400 }
      );
    }

    // Create unique filename and prepare paths
    const timestamp = Date.now();
    const filename = `avatar-${timestamp}${getExtension(file.name)}`;
    const uploadDir = join(process.cwd(), "public/uploads/avatars");
    const filePath = join(uploadDir, filename);

    // Ensure upload directory exists
    await mkdir(uploadDir, { recursive: true });

    // Save file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);
    console.log("[API] File saved to:", filePath);

    // Update user in database
    const imageUrl = `/uploads/avatars/${filename}`;
    const user = await prisma.user.update({
      where: { 
        email: session.user.email 
      },
      data: {
        image: imageUrl,
        updatedAt: new Date(),
      },
    });

    console.log("[API] User updated with new avatar:", user);
    return NextResponse.json({ 
      success: true, 
      image: imageUrl 
    });

  } catch (error) {
    console.error("[API] Avatar upload error:", error);
    return NextResponse.json(
      { 
        message: "Failed to upload avatar",
        error: error instanceof Error ? error.message : "Unknown error"
      }, 
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log("[API] Session for avatar deletion:", session);

    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Unauthorized" }, 
        { status: 401 }
      );
    }

    const user = await prisma.user.update({
      where: { 
        email: session.user.email 
      },
      data: {
        image: null,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API] Avatar deletion error:", error);
    return NextResponse.json(
      { message: "Failed to remove avatar" }, 
      { status: 500 }
    );
  }
}

function getExtension(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase();
  return ext ? `.${ext}` : '';
}