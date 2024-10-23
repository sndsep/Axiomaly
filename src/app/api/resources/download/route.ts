import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth/auth-config'
import { db } from '@/lib/db/db'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const { resourceId } = await req.json()

    const resource = await db.resource.findUnique({
      where: { id: resourceId }
    })

    if (!resource) {
      return new NextResponse('Resource not found', { status: 404 })
    }

    // Incrementar el contador de descargas
    await db.resource.update({
      where: { id: resourceId },
      data: { downloads: { increment: 1 } }
    })

    // En un sistema real, aquí generarías una URL firmada
    // para la descarga segura del recurso
    return NextResponse.json({
      downloadUrl: resource.url,
      message: 'Download started'
    })
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 })
  }
}