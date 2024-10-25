import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user.id) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body = await req.json()
    const { name, email, image } = body

    const updatedUser = await db.user.update({
      where: { id: session.user.id },
      data: {
        name,
        email,
        image,
      },
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error('Error al actualizar el perfil:', error)
    return NextResponse.json({ error: 'Error al actualizar el perfil' }, { status: 500 })
  }
}
