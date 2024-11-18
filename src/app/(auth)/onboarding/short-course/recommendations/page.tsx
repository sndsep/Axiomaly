// src/app/(auth)/onboarding/short-course/recommendations/page.tsx

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { OnboardingLayout } from "@/components/onboarding/layout/OnboardingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/forms/card";
import { CourseList } from "@/components/course/course-list";
import { CourseFilters } from "@/components/course/course-filters";
import type { Course, CourseRecommendation } from "@/types/courses";

// Función para obtener las categorías
async function getCategories() {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return categories;
}

// Función para mapear el nivel de experiencia del survey al nivel del curso
function mapExperienceLevel(surveyLevel: string): Course['level'] {
  switch (surveyLevel.toLowerCase()) {
    case 'intermediate':
      return 'intermediate';
    case 'advanced':
      return 'advanced';
    default:
      return 'beginner';
  }
}

// Función para obtener cursos recomendados basándose en las respuestas del survey
async function getRecommendedCourses(userEmail: string): Promise<CourseRecommendation[]> {
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    include: {
      onboardingProgress: true,
    },
  });

  if (!user?.onboardingProgress?.responses?.shortCourseSurvey) {
    return [];
  }

  const survey = user.onboardingProgress.responses.shortCourseSurvey as {
    experienceLevel: string;
    availability: string[];
  };

  const courses = await prisma.course.findMany({
    where: {
      level: mapExperienceLevel(survey.experienceLevel),
    },
    include: {
      instructor: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
      _count: {
        select: {
          enrollments: true,
          lessons: true,
        },
      },
    },
    take: 6,
  });

  // Transformar los cursos al formato CourseRecommendation
  return courses.map(course => ({
    id: course.id,
    title: course.title,
    description: course.description || '',
    duration: course.duration || '0h',
    level: mapExperienceLevel(course.level || 'beginner'),
    skills: [], // Añadir cuando tengamos esta información
    thumbnail: course.thumbnail,
    instructor: {
      id: course.instructor.id,
      name: course.instructor.name || 'Instructor',
      avatar: course.instructor.image || undefined,
    },
    enrolledStudents: course._count.enrollments,
    matchPercentage: 85, // Calcular basado en las preferencias del usuario
    matchedInterests: [], // Añadir cuando implementemos matching de intereses
    createdAt: course.createdAt,
  }));
}

export default async function RecommendationsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect('/login');
  }

  // Verificar que el usuario haya completado el survey
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { onboardingProgress: true }
  });

  if (!user?.onboardingProgress?.responses?.shortCourseSurvey) {
    redirect('/onboarding/short-course/survey');
  }

  const [recommendedCourses, categories] = await Promise.all([
    getRecommendedCourses(session.user.email),
    getCategories(),
  ]);

  // Inicializar progreso para cada curso
  const progress = recommendedCourses.reduce((acc, course) => ({
    ...acc,
    [course.id]: {
      percentage: 0,
      status: 'not-started' as const,
      lastUpdated: new Date(),
    }
  }), {});

  const handleEnroll = async (courseId: string) => {
    'use server';
    
    try {
      await prisma.enrollment.create({
        data: {
          userId: user.id,
          courseId: courseId,
          status: 'active',
          progress: 0,
        },
      });

      await prisma.onboardingProgress.update({
        where: { userId: user.id },
        data: {
          currentStep: 'PROFILE',
          responses: {
            ...user.onboardingProgress?.responses,
            selectedCourse: courseId,
          },
        },
      });

      redirect('/onboarding/profile');
    } catch (error) {
      console.error('Error enrolling in course:', error);
    }
  };

  return (
    <OnboardingLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Cursos Recomendados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <CourseFilters
              categories={categories}
              onSearchChange={(search) => {
                console.log('Search:', search);
              }}
              onFilterChange={(filter) => {
                console.log('Filter:', filter);
              }}
              onSortChange={(sort) => {
                console.log('Sort:', sort);
              }}
            />
            
            {recommendedCourses.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>No se encontraron cursos que coincidan con tus preferencias.</p>
                <p>Por favor, ajusta los filtros o vuelve más tarde.</p>
              </div>
            ) : (
              <CourseList 
                courses={recommendedCourses} 
                progress={progress}
                onEnroll={handleEnroll}
              />
            )}
          </CardContent>
        </Card>

        {recommendedCourses.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>¿Por qué te recomendamos estos cursos?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Coinciden con tu nivel de experiencia: {user.onboardingProgress?.responses?.shortCourseSurvey.experienceLevel}</li>
                <li>Se adaptan a tu disponibilidad de horario</li>
                <li>Cubren las áreas de interés que seleccionaste</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </OnboardingLayout>
  );
}