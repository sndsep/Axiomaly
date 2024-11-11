// src/app/api/user/onboarding/route.ts
import { NextResponse } from "next/server"
import prisma from "@/lib/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const data = await req.json()

    // Update user with onboarding data
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        hasCompletedOnboarding: true,
        // Add other onboarding fields here
      },
    })

    return NextResponse.json(
      { success: true, user: updatedUser },
      { status: 200 }
    )

  } catch (error) {
    console.error("Onboarding error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}