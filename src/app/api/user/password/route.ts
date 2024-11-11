// src/app/api/user/password/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { hash, compare } from "bcryptjs";

const passwordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8),
  confirmPassword: z.string().min(8),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse(
        JSON.stringify({ message: "Unauthorized" }), 
        { status: 401 }
      );
    }

    const json = await req.json();
    const validatedData = passwordSchema.parse(json);

    // Get user with current password
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user?.hashedPassword) {
      return new NextResponse(
        JSON.stringify({ message: "Unable to change password" }), 
        { status: 400 }
      );
    }

    // Verify current password
    const isValid = await compare(validatedData.currentPassword, user.hashedPassword);
    if (!isValid) {
      return new NextResponse(
        JSON.stringify({ message: "Current password is incorrect" }), 
        { status: 400 }
      );
    }

    // Hash and update new password
    const hashedPassword = await hash(validatedData.newPassword, 12);
    await prisma.user.update({
      where: { email: session.user.email },
      data: { 
        hashedPassword,
        updatedAt: new Date()
      },
    });

    return NextResponse.json({ message: "Password updated successfully" });

  } catch (error) {
    console.error("Password update error:", error);
    
    if (error instanceof z.ZodError) {
      return new NextResponse(
        JSON.stringify({ 
          message: "Validation error", 
          errors: error.errors 
        }), 
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Failed to update password" }), 
      { status: 500 }
    );
  }
}