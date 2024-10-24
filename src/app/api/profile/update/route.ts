import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/auth-config"
import prisma from "@/lib/db"
import * as z from "zod"

const updateProfileSchema = z.object({
  name: z.string().min(2),
  bio: z.string().max(500).optional(),
  avatar: z.string().optional(),
})

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    console.log("Received update data:", body)

    const validatedData = updateProfileSchema.parse(body)
    console.log("Validated data:", validatedData)

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(session.user.id, 10) }, // Convertimos el ID a número
      data: {
        name: validatedData.name,
        bio: validatedData.bio,
        image: validatedData.avatar, // Usamos 'image' en lugar de 'avatar'
      },
    })
    console.log("Updated user:", updatedUser)

    return NextResponse.json({
      id: updatedUser.id,
      name: updatedUser.name,
      bio: updatedUser.bio,
      image: updatedUser.image, // Usamos 'image' en lugar de 'avatar'
      email: updatedUser.email,
    })
  } catch (error) {
    console.error('Profile update error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
