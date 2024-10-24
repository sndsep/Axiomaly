import { NextResponse } from "next/server"
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/auth-config"

// Constantes de validación
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg']
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      )
    }

    // Log para debugging
    console.log('Received file:', {
      type: file.type,
      size: file.size,
      name: file.name
    })

    // Validación de tipo de archivo
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `File type ${file.type} not allowed` },
        { status: 400 }
      )
    }

    // Validación de tamaño
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 400 }
      )
    }

    // Asegurar que el directorio existe
    const uploadDir = path.join(process.cwd(), 'public/uploads/avatars')
    await mkdir(uploadDir, { recursive: true })

    // Crear el buffer y guardar el archivo
    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = `avatar-${session.user.id}-${Date.now()}${path.extname(file.name)}`
    const filepath = path.join(uploadDir, filename)
    
    await writeFile(filepath, buffer)
    
    const fileUrl = `/uploads/avatars/${filename}`
    console.log('File saved successfully:', fileUrl)
    
    return NextResponse.json({ url: fileUrl })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Error processing upload' },
      { status: 500 }
    )
  }
}
