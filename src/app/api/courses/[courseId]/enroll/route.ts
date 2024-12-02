// app/api/courses/[courseId]/enroll/route.ts
export async function POST(
    req: Request,
    { params }: { params: { courseId: string } }
  ) {
    try {
      const session = await getServerSession(authOptions);
      if (!session?.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
  
      const courseId = params.courseId;
  
      // Verificar si el curso existe
      const course = await prisma.course.findUnique({
        where: { id: courseId },
        include: {
          enrollments: {
            where: { userId: session.user.id }
          }
        }
      });
  
      if (!course) {
        return NextResponse.json({ error: 'Course not found' }, { status: 404 });
      }
  
      if (course.enrollments.length > 0) {
        return NextResponse.json(
          { error: 'Already enrolled in this course' }, 
          { status: 400 }
        );
      }
  
      // Crear inscripción
      const enrollment = await prisma.enrollment.create({
        data: {
          userId: session.user.id,
          courseId: courseId,
          status: 'active',
          progress: {
            create: {
              percentage: 0,
              lastUpdated: new Date(),
            }
          }
        },
        include: {
          progress: true
        }
      });
  
      return NextResponse.json({ enrollment });
  
    } catch (error) {
      console.error('[Course Enrollment API] Error:', error);
      return NextResponse.json(
        { error: 'Internal server error' }, 
        { status: 500 }
      );
    }
  }