import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(
  req: NextRequest,
  { params }: { params: { courseId: string; materialId: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const material = await prisma.courseResource.findUnique({
      where: { id: params.materialId }
    })

    if (!material) {
      return NextResponse.json({ error: 'Material not found' }, { status: 404 })
    }

    // Add download tracking
    await prisma.resourceDownload.create({
      data: {
        resourceId: params.materialId,
        userId: session.user.id
      }
    })

    // Update download count
    await prisma.courseResource.update({
      where: { id: params.materialId },
      data: { downloads: { increment: 1 } }
    })

    // Return file stream
    return new Response(material.file)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to download material' },
      { status: 500 }
    )
  }
}