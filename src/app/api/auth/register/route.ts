// src/app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, password } = body;

    console.log("Incoming registration request");
    console.log("Request body:", { ...body, password: '[REDACTED]' });

    if (!email || !name || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user exists
    const exists = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (exists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user with explicit onboarding status
    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        hashedPassword,
        role: "STUDENT",
        hasCompletedOnboarding: false,
        careerPath: null,
        // Create preferences inline
        preferences: {
          create: {
            emailNotifications: true,
            marketingEmails: false,
            courseUpdates: true,
            preferredTags: []
          }
        },
        // Create onboarding progress inline
        onboardingProgress: {
          create: {
            currentStep: "CAREER_PATH",
            completed: false,
            responses: {}
          }
        }
      },
      // Include these relations in the response
      include: {
        preferences: true,
        onboardingProgress: true
      }
    });

    console.log("Created new user:", {
      id: user.id,
      email: user.email,
      hasCompletedOnboarding: user.hasCompletedOnboarding,
      careerPath: user.careerPath
    });

    // Redirect to onboarding after successful registration
    return NextResponse.redirect(new URL('/onboarding/career-path', req.url));

  } catch (error) {
    console.error("Registration error:", error);
    
    return NextResponse.json(
      { 
        success: false,
        error: "Failed to create user account" 
      }, 
      { status: 500 }
    );
  }
}