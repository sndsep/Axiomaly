// src/app/api/onboarding/survey/route.ts
const surveySchema = z.object({
  experienceLevel: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']),
  interests: z.array(z.string()).min(1),
  specializations: z.array(z.string()).optional(),
  careerGoals: z.array(z.string()).optional(),
  priorExperience: z.string().optional(),
  education: z.string().optional(),
  portfolio: z.string().url().optional(),
  weeklyHours: z.number().min(1).max(40),
  industryPreference: z.string().optional()
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = surveySchema.parse(await req.json());

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { onboardingProgress: true }
    });

    const nextStep = user?.careerPath === 'SHORT_COURSE' 
      ? 'RECOMMENDATIONS' 
      : 'BACKGROUND';

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        surveyResponse: {
          upsert: {
            create: {
              ...data,
              careerPath: user?.careerPath,
              updatedAt: new Date()
            },
            update: {
              ...data,
              updatedAt: new Date()
            }
          }
        },
        onboardingProgress: {
          update: {
            currentStep: nextStep,
            responses: {
              ...user?.onboardingProgress?.responses,
              survey: {
                ...data,
                completedAt: new Date().toISOString()
              }
            }
          }
        }
      },
      include: {
        onboardingProgress: true,
        surveyResponse: true
      }
    });

    return NextResponse.json({ 
      success: true,
      user: updatedUser,
      nextStep: `/onboarding/${nextStep.toLowerCase()}`
    });
  } catch (error) {
    console.error('Error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}