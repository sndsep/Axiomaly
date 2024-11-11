// src/app/api/user/profile/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

const urlSchema = z.string().url("Must be a valid URL").nullable().optional();
const emptyStringToNull = (value: string) => (value === "" ? null : value);

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().max(500).nullable().optional().transform(emptyStringToNull),
  portfolioUrl: z.string().url("Must be a valid URL").nullable().optional().transform(emptyStringToNull),
  linkedinUrl: z.string().url("Must be a valid URL").nullable().optional().transform(emptyStringToNull),
  twitterUrl: z.string().url("Must be a valid URL").nullable().optional().transform(emptyStringToNull),
});

export async function PATCH(req: Request) {
  try {
    console.log("[API] Starting profile update");
    const session = await getServerSession(authOptions);
    console.log("[API] Session:", session);

    if (!session?.user?.email) {
      console.log("[API] No authenticated user found");
      return new NextResponse(
        JSON.stringify({ message: "Unauthorized" }), 
        { status: 401 }
      );
    }

    const json = await req.json();
    console.log("[API] Received data:", json);

    const validatedData = profileSchema.parse(json);
    console.log("[API] Validated data:", validatedData);

    // First, update the user
    const user = await prisma.user.update({
      where: { 
        email: session.user.email 
      },
      data: {
        name: validatedData.name,
        bio: validatedData.bio,
        updatedAt: new Date(),
      },
    });

    // Then, upsert the preferences
    const preferences = await prisma.userPreferences.upsert({
      where: {
        userId: user.id
      },
      update: {
        portfolio: validatedData.portfolioUrl,
        linkedin: validatedData.linkedinUrl,
        twitter: validatedData.twitterUrl,
      },
      create: {
        userId: user.id,
        portfolio: validatedData.portfolioUrl,
        linkedin: validatedData.linkedinUrl,
        twitter: validatedData.twitterUrl,
        emailNotifications: true,
        marketingEmails: false,
        courseUpdates: true,
      }
    });

    console.log("[API] User and preferences updated:", { user, preferences });

    return NextResponse.json({
      ...user,
      preferences
    });

  } catch (error) {
    console.error("[API] Profile update error:", error);
    
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
      JSON.stringify({ 
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error"
      }), 
      { status: 500 }
    );
  }
}