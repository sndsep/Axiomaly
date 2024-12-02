// src/app/api/courses/[courseId]/materials/route.ts
export async function GET(
    req: NextRequest,
    { params }: { params: { courseId: string } }
  ) {
    try {
      const materials = await prisma.courseResource.findMany({
        where: { courseId: params.courseId },
        orderBy: { createdAt: 'desc' }
      })
  
      return NextResponse.json(materials)
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to fetch materials' },
        { status: 500 }
      )
    }
  }