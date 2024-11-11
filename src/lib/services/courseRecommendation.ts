//src/lib/services/courseRecommendation.ts
// This service calculates course recommendations for students based on their preferences
// It is used in the onboarding process to recommend courses to students
// It is also used in the dashboard to recommend courses to students


import { prisma } from "@/lib/db";

export interface UserPreferences {
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  interests: string[];
  weeklyHours: number;
  goals: string[];
}

export interface CourseScore {
  courseId: string;
  score: number;
  matchingFactors: string[];
}

export interface RecommendedCourse {
  id: string;
  title: string;
  description: string;
  duration: number;
  level: string;
  topics: string[];
  thumbnailUrl: string;
  matchScore: number;
  matchingFactors: string[];
}

export class CourseRecommendationService {
  private async calculateCourseScores(
    preferences: UserPreferences,
    courses: any[]
  ): Promise<CourseScore[]> {
    return courses.map(course => {
      let score = 0;
      const matchingFactors: string[] = [];

      // Match by experience level
      if (course.level === preferences.experienceLevel) {
        score += 30;
        matchingFactors.push('Experience Level Match');
      } else if (
        (preferences.experienceLevel === 'beginner' && course.level === 'intermediate') ||
        (preferences.experienceLevel === 'intermediate' && course.level === 'advanced')
      ) {
        score += 15;
        matchingFactors.push('Progressive Difficulty');
      }

      // Match by interests
      const matchingInterests = preferences.interests.filter(interest =>
        course.topics.includes(interest)
      );
      if (matchingInterests.length > 0) {
        score += matchingInterests.length * 20;
        matchingFactors.push(`Matches ${matchingInterests.length} of your interests`);
      }

      // Match by time commitment
      const courseWeeklyHours = course.duration / course.totalWeeks;
      if (courseWeeklyHours <= preferences.weeklyHours) {
        score += 15;
        matchingFactors.push('Fits your schedule');
      }

      // Match by goals
      const hasMatchingGoal = preferences.goals.some(goal => 
        course.learningOutcomes.some((outcome: string) => 
          outcome.toLowerCase().includes(goal.toLowerCase())
        )
      );
      if (hasMatchingGoal) {
        score += 25;
        matchingFactors.push('Aligns with your goals');
      }

      return {
        courseId: course.id,
        score,
        matchingFactors
      };
    });
  }

  async getRecommendedCourses(
    userId: string,
    limit: number = 6
  ): Promise<RecommendedCourse[]> {
    // Fetch user preferences
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        onboardingProgress: true
      }
    });

    if (!user?.onboardingProgress?.responses) {
      throw new Error('User preferences not found');
    }

    const preferences = (user.onboardingProgress.responses as any).preferences as UserPreferences;

    // Fetch all available courses
    const courses = await prisma.course.findMany({
      where: {
        // Filter for short courses
        duration: {
          lte: 12 // 12 weeks or less
        },
        // Only include published courses
        published: true
      },
      include: {
        topics: true,
        learningOutcomes: true
      }
    });

    // Calculate scores for each course
    const courseScores = await this.calculateCourseScores(preferences, courses);

    // Sort courses by score
    const sortedCourses = courseScores
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    // Map courses with scores to return format
    const recommendedCourses = sortedCourses.map(scored => {
      const course = courses.find(c => c.id === scored.courseId)!;
      return {
        id: course.id,
        title: course.title,
        description: course.description,
        duration: course.duration,
        level: course.level,
        topics: course.topics.map(t => t.name),
        thumbnailUrl: course.thumbnailUrl,
        matchScore: scored.score,
        matchingFactors: scored.matchingFactors
      };
    });

    return recommendedCourses;
  }

  async saveRecommendations(
    userId: string,
    recommendedCourseIds: string[]
  ): Promise<void> {
    await prisma.onboardingProgress.update({
      where: { userId },
      data: {
        responses: {
          update: {
            recommendedCourses: recommendedCourseIds
          }
        },
        completedSteps: {
          push: 'course-recommendations'
        }
      }
    });
  }
}