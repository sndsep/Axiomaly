import { NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import path from 'path'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/auth-config"
import { mkdir } from 'fs/promises'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No se ha subido ningún archivo' },
        { status: 400 }
      )
    }

    // Asegurarse de que el directorio existe
    const uploadDir = path.join(process.cwd(), 'public/uploads/avatars')
    await mkdir(uploadDir, { recursive: true })

    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = `avatar-${session.user.id}-${Date.now()}${path.extname(file.name)}`
    const filepath = path.join(uploadDir, filename)
    
    await writeFile(filepath, buffer)
    
    const fileUrl = `/uploads/avatars/${filename}`
    
    return NextResponse.json({ url: fileUrl })
  } catch (error) {
    console.error('Error al subir archivo:', error)
    return NextResponse.json(
      { error: 'Error al procesar la subida' },
      { status: 500 }
    )
  }
}
