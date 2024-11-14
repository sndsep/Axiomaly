// src/app/(auth)/onboarding/short-course/survey/page.tsx
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Survey from "@/components/onboarding/short-course/Survey"; // Ensure this import is correct

export default async function ShortCourseSurveyPage() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        redirect("/login");
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: {
            onboardingProgress: true,
        },
    });

    if (!user || user.careerPath !== 'SHORT_COURSE') {
        redirect("/onboarding/career-path");
    }

    return <Survey />;
}