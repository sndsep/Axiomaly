// src/app/api/debug/verify-db/route.ts
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function GET() {
  try {
    // Attempt to create a test user if it doesn't exist
    const testUser = await prisma.user.upsert({
      where: {
        email: "student@example.com",
      },
      update: {},
      create: {
        email: "student@example.com",
        name: "Test Student",
        hashedPassword: await bcrypt.hash("student123", 12),
        role: "STUDENT",
        careerPath: "DEGREE_PROGRAM",
      },
    })

    // Check if the user exists and has the correct password
    const passwordCheck = await bcrypt.compare(
      "student123",
      testUser.hashedPassword || ""
    )

    return NextResponse.json({
      status: "success",
      message: "Database verification complete",
      userExists: !!testUser,
      passwordValid: passwordCheck,
      userDetails: {
        id: testUser.id,
        email: testUser.email,
        name: testUser.name,
        role: testUser.role,
      },
    })
  } catch (error) {
    console.error("Database verification error:", error)
    return NextResponse.json(
      {
        status: "error",
        message: "Database verification failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}