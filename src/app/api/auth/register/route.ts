// src/app/api/auth/register/route.ts

import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    console.log("Incoming registration request");
    console.log("Request body:", { name, email, password: '[REDACTED]' });

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({
          error: "User with this email already exists"
        }),
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        role: "STUDENT",
        hasCompletedOnboarding: false,
        careerPath: null
      },
      select: {
        id: true,
        email: true,
        hasCompletedOnboarding: true,
        careerPath: true
      }
    });

    console.log("Created new user:", user);

    return NextResponse.json(
      { 
        user,
        message: "User created successfully" 
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Registration error:", error);
    return new NextResponse(
      JSON.stringify({
        error: error.message || "An error occurred during registration"
      }),
      { status: 500 }
    );
  }
}