// src/app/api/onboarding/progress/route.ts
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const progress = await prisma.onboardingProgress.findUnique({
      where: { userId: session.user.id },
      include: {
        user: {
          select: {
            careerPath: true,
            hasCompletedOnboarding: true
          }
        }
      }
    });

    if (!progress) {
      return NextResponse.json({ error: 'Progress not found' }, { status: 404 });
    }

    return NextResponse.json(progress);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { currentStep } = await req.json();

    const updatedProgress = await prisma.onboardingProgress.update({
      where: { userId: session.user.id },
      data: {
        currentStep,
        updatedAt: new Date()
      }
    });

    return NextResponse.json(updatedProgress);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}