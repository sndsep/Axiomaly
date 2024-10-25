import { NextResponse } from "next/server"
import { v4 as uuidv4 } from 'uuid'
import { writeFile } from 'fs/promises'
import path from 'path'

// Constantes de validación
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg']
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No se proporcionó ningún archivo' }, { status: 400 })
    }

    // Log for debugging
    console.log('Received file:', {
      type: file.type,
      size: file.size,
      name: file.name
    })

    // Validación de tipo de archivo
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `Tipo de archivo ${file.type} no permitido` },
        { status: 400 }
      )
    }

    // Validación de tamaño
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'El tamaño del archivo excede el límite de 5MB' },
        { status: 400 }
      )
    }

    const fileExtension = file.name.split('.').pop()
    const fileName = `${uuidv4()}.${fileExtension}`
    const buffer = Buffer.from(await file.arrayBuffer())

    // Definir la ruta donde se guardarán las imágenes
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    const filePath = path.join(uploadDir, fileName)

    // Guardar el archivo
    await writeFile(filePath, buffer)

    // Construir la URL del archivo
    const fileUrl = `/uploads/${fileName}`

    return NextResponse.json({ url: fileUrl })
  } catch (error) {
    console.error('Error al cargar el archivo:', error)
    return NextResponse.json({ error: 'Error al cargar el archivo' }, { status: 500 })
  }
}
