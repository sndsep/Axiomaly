import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/auth-config"
import { db } from "@/lib/db/db"
import { z } from "zod"

const updateProfileSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  bio: z.string().optional(),
  avatar: z.string().optional(),
})

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    console.log('Received update data:', body) // Debug log
    
    const validatedData = updateProfileSchema.parse(body)
    console.log('Validated data:', validatedData) // Debug log

    const updatedUser = await db.user.update({
      where: {
        id: session.user.id
      },
      data: {
        name: validatedData.name,
        bio: validatedData.bio,
        avatar: validatedData.avatar,
      },
      select: {
        id: true,
        name: true,
        bio: true,
        avatar: true,
        email: true,
      }
    })

    console.log('Updated user:', updatedUser) // Debug log

    return NextResponse.json({
      message: 'Profile updated successfully',
      user: updatedUser
    })

  } catch (error) {
    console.error('[PROFILE_UPDATE_ERROR]', {
      error,
      stack: error.stack,
      message: error.message
    })
    
    return NextResponse.json({ 
      error: error instanceof z.ZodError 
        ? 'Invalid input data' 
        : 'Internal server error'
    }, { 
      status: error instanceof z.ZodError ? 400 : 500 
    })
  }
}
