import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/auth-config"
import { db } from "@/lib/db/db"
import { z } from "zod"

const updateProfileSchema = z.object({
  name: z.string().min(2).optional(),
  bio: z.string().max(500).optional(),
  avatar: z.string().optional(),
})

export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body = await request.json()
    
    const validatedData = updateProfileSchema.parse(body)

    // Actualizar perfil usando 'avatar' en lugar de 'image'
    const updatedUser = await db.user.update({
      where: {
        id: session.user.id
      },
      data: {
        name: validatedData.name,
        bio: validatedData.bio,
        avatar: validatedData.avatar, // Cambiado de image a avatar
      }
    })

    return NextResponse.json({
      message: 'Perfil actualizado correctamente',
      user: updatedUser
    })

  } catch (error) {
    console.error('[PROFILE_UPDATE_ERROR]', error)
    return NextResponse.json({ 
      error: error instanceof z.ZodError 
        ? 'Datos de entrada inválidos' 
        : 'Error interno del servidor'
    }, { 
      status: error instanceof z.ZodError ? 400 : 500 
    })
  }
}
