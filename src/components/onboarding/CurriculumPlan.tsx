'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Loader2, BookOpen, Clock, Target, GraduationCap } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  level: 'Foundation' | 'Core' | 'Advanced' | 'Specialization';
}

interface CurriculumPlanProps {
  userPreferences: any; // Replace with proper type from your schema
}

export default function CurriculumPlan({ userPreferences }: CurriculumPlanProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isAccepting, setIsAccepting] = React.useState(false);

  // Example curriculum structure based on user preferences
  const curriculum: Record<string, Course[]> = {
    'Foundation': [
      {
        id: 'vfx-101',
        title: 'Introduction to VFX',
        duration: '4 weeks',
        description: 'Core concepts and fundamentals of visual effects',
        level: 'Foundation'
      },
      {
        id: '3d-basics',
        title: '3D Modeling Fundamentals',
        duration: '6 weeks',
        description: 'Basic 3D modeling techniques and principles',
        level: 'Foundation'
      }
    ],
    'Core': [
      {
        id: 'texturing-101',
        title: 'Texturing & Materials',
        duration: '6 weeks',
        description: 'Creation and application of textures and materials',
        level: 'Core'
      },
      {
        id: 'lighting-101',
        title: 'Lighting Fundamentals',
        duration: '4 weeks',
        description: 'Principles of lighting for 3D environments',
        level: 'Core'
      }
    ],
    'Advanced': [
      {
        id: 'compositing-301',
        title: 'Advanced Compositing',
        duration: '8 weeks',
        description: 'Complex compositing techniques and workflows',
        level: 'Advanced'
      },
      {
        id: 'fx-301',
        title: 'Dynamic Effects & Simulation',
        duration: '8 weeks',
        description: 'Advanced particle systems and physics simulation',
        level: 'Advanced'
      }
    ],
    'Specialization': [
      {
        id: 'pipeline-401',
        title: 'Production Pipeline Development',
        duration: '6 weeks',
        description: 'Custom tool development and pipeline optimization',
        level: 'Specialization'
      }
    ]
  };

  const handleAcceptCurriculum = async () => {
    setIsAccepting(true);
    try {
      const response = await fetch('/api/user/onboarding/curriculum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accepted: true }),
      });

      if (!response.ok) {
        throw new Error('Failed to accept curriculum');
      }

      toast({
        title: "Curriculum Accepted",
        description: "Moving to course recommendations...",
      });

      router.push('/onboarding/degree-program/recommendations');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your preferences. Please try again.",
        variant: "destructive",
      });
      setIsAccepting(false);
    }
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Your VFX Degree Curriculum</h1>
        <p className="text-gray-600">
          Based on your preferences, we've crafted a personalized learning path
        </p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-500" />
            <div>
              <h3 className="font-semibold">Program Duration</h3>
              <p className="text-gray-600">24 months</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <Target className="w-8 h-8 text-purple-500" />
            <div>
              <h3 className="font-semibold">Career Goal</h3>
              <p className="text-gray-600">Professional VFX Artist</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        {Object.entries(curriculum).map(([level, courses]) => (
          <Card key={level}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                {level} Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {courses.map((course) => (
                  <Card key={course.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <BookOpen className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{course.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {course.description}
                          </p>
                          <span className="text-sm text-gray-500">
                            Duration: {course.duration}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-4">
              This curriculum is designed to help you achieve your goal of becoming a professional
              VFX artist. It includes all necessary skills and knowledge areas based on your interests
              and experience level.
            </p>
            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                onClick={() => router.push('/onboarding/degree-program/survey')}
              >
                Adjust Preferences
              </Button>
              <Button
                onClick={handleAcceptCurriculum}
                disabled={isAccepting}
              >
                {isAccepting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Accepting...
                  </>
                ) : (
                  'Accept Curriculum'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}