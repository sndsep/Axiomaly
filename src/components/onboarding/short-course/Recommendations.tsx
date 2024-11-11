// src/components/onboarding/short-course/Recommendations.tsx

// This component renders the recommendations for short courses
// It displays the recommended courses and allows the user to select one

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/forms/badge';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent } from '@/components/ui/forms/card';
import { useToast } from '@/components/ui/hooks/use-toast';
import { OnboardingLayout } from '../common/OnboardingLayout';
import { Clock, Award, Star, ChevronRight, Users, Loader2 } from 'lucide-react';
import type { CourseRecommendation } from '../types';

interface RecommendationsProps {
  userPreferences: {
    skillLevel: string;
    primaryInterest: string;
    timeCommitment: number;
    learningGoals: string[];
  };
}

interface CourseCardProps {
  course: CourseRecommendation;
  onSelect: () => void;
  isSelected: boolean;
  isLoading: boolean;
}

const CourseCard = ({ course, onSelect, isSelected, isLoading }: CourseCardProps) => {
  return (
    <Card className={`group transition-all ${isSelected ? 'border-blue-400 shadow-lg' : 'hover:border-blue-200'}`}>
      <CardContent className="p-6">
        {/* Header with match score */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 line-clamp-2 mb-2">{course.description}</p>
          </div>
          <Badge variant="secondary" className="bg-blue-50 text-blue-700">
            {course.matchScore}% Match
          </Badge>
        </div>

        {/* Course details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Award className="w-4 h-4" />
            <span className="text-sm">{course.level}</span>
          </div>
        </div>

        {/* Topics */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {course.topics.map((topic) => (
              <Badge key={topic} variant="outline">
                {topic}
              </Badge>
            ))}
          </div>

          <Button 
            onClick={onSelect}
            className="w-full"
            variant={isSelected ? "secondary" : "default"}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Selecting...
              </>
            ) : isSelected ? (
              'Selected'
            ) : (
              <>
                Select Course
                <ChevronRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ShortCourseRecommendations({ userPreferences }: RecommendationsProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // This would come from an API in production
  const recommendations: CourseRecommendation[] = [
    {
      id: '1',
      title: 'Introduction to 3D Modeling',
      description: 'Learn the fundamentals of 3D modeling using industry-standard software. Perfect for beginners wanting to start their VFX journey.',
      duration: '6 weeks',
      level: 'Beginner',
      matchScore: 95,
      topics: ['Maya', 'Modeling', 'Texturing'],
      prerequisites: []
    },
    {
      id: '2',
      title: 'VFX Compositing Essentials',
      description: 'Master the basics of compositing and create stunning visual effects. Ideal for those interested in post-production.',
      duration: '8 weeks',
      level: 'Intermediate',
      matchScore: 88,
      topics: ['Nuke', 'Compositing', 'Color Correction'],
      prerequisites: ['Basic software knowledge']
    },
    {
      id: '3',
      title: 'Character Animation Fundamentals',
      description: 'Learn the principles of animation and bring characters to life. Perfect for aspiring animators.',
      duration: '10 weeks',
      level: 'Beginner',
      matchScore: 82,
      topics: ['Animation', 'Character Rigging', 'Motion'],
      prerequisites: []
    },
  ];

  const handleCourseSelection = async (courseId: string) => {
    setIsLoading(true);
    setSelectedCourseId(courseId);

    try {
      const response = await fetch('/api/onboarding/select-course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId }),
      });

      if (!response.ok) {
        throw new Error('Failed to save course selection');
      }

      toast({
        title: "Great choice!",
        description: "Let's complete your profile to get started.",
      });

      // Small delay to show the selection state
      setTimeout(() => {
        router.push('/onboarding/short-course/profile');
      }, 1000);

    } catch (error) {
      console.error('Error selecting course:', error);
      toast({
        title: "Error",
        description: "Failed to save your selection. Please try again.",
        variant: "destructive",
      });
      setSelectedCourseId(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <OnboardingLayout
      currentStep={3}
      careerPath="SHORT_COURSE"
      title="Recommended Courses"
      description="Based on your interests and goals, we've selected these courses for you"
    >
      {/* Course Cards */}
      <div className="space-y-6">
        {recommendations.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onSelect={() => handleCourseSelection(course.id)}
            isSelected={selectedCourseId === course.id}
            isLoading={isLoading && selectedCourseId === course.id}
          />
        ))}
      </div>

      {/* Help Section */}
      <div className="mt-12">
        <Card>
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Need Help Deciding?</h3>
              <p className="text-gray-600">
                Our advisors can help you choose the right course for your goals
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => router.push('/advisor')}
                >
                  <Users className="w-4 h-4" />
                  Talk to Advisor
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => router.push('/compare-courses')}
                >
                  <Star className="w-4 h-4" />
                  Compare Courses
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </OnboardingLayout>
  );
}