import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/auth-config"
import prisma from "@/lib/db"
import { Prisma } from "@prisma/client"
import { z } from "zod"

const updateRoleSchema = z.object({
  userId: z.string(),
  role: z.enum([UserRole.ADMIN, UserRole.INSTRUCTOR, UserRole.STUDENT]),
})

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    // Verify admin role
    if (session?.user?.role !== UserRole.ADMIN) {
      return NextResponse.json(
        { error: "Not authorized" },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { userId, role } = updateRoleSchema.parse(body)

    // Update user role
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error("[ROLE_UPDATE_ERROR]", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
