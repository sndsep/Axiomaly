// src/components/onboarding/career-path/CareerPathSelection.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent } from '@/components/ui/forms/card';
import { Alert, AlertDescription } from '@/components/ui/forms/alert';
import { Loader2, Users, BookOpen, Rocket, Clock, GraduationCap, Target, Trophy } from 'lucide-react';
import { CareerPath } from '@prisma/client';

// Career path features configuration
const pathFeatures = {
  shortCourse: {
    type: 'SHORT_COURSE' as CareerPath,
    title: "Short Course",
    description: "Master specific skills fast",
    color: "border-blue-400",
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    features: [
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Duration",
        description: "1-3 months per course"
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "Focus",
        description: "Specific VFX skills"
      },
      {
        icon: <Trophy className="w-6 h-6" />,
        title: "Outcome",
        description: "Course certificates"
      }
    ]
  },
  degreeProgram: {
    type: 'DEGREE_PROGRAM' as CareerPath,
    title: "Degree Program",
    description: "Become a complete VFX artist",
    color: "border-purple-400",
    icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
    features: [
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Duration",
        description: "12-24 months program"
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "Focus",
        description: "Complete VFX education"
      },
      {
        icon: <Trophy className="w-6 h-6" />,
        title: "Outcome",
        description: "Professional degree"
      }
    ]
  }
};

export function CareerPathSelection() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState<CareerPath | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePathSelect = async (path: CareerPath) => {
    setError(null);
    setIsSubmitting(path);
    try {
      // Save career path selection
      const response = await fetch('/api/onboarding/career-path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ careerPath: path }),
      });

      if (!response.ok) {
        throw new Error('Failed to save career path');
      }

      // Determine next route based on path
      const nextRoute = path === 'SHORT_COURSE'
        ? '/onboarding/short-course/survey'
        : '/onboarding/degree-program/survey';

      // Navigate to appropriate survey
      router.push(nextRoute);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to save your selection. Please try again.');
      toast({
        title: "Error",
        description: "Failed to save your selection. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(null);
    }
  };

  return (
    <section className="w-full py-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Path</h1>
          <p className="text-xl text-gray-600">Select the journey that best fits your goals</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[pathFeatures.shortCourse, pathFeatures.degreeProgram].map((path) => (
            <div key={path.type} className="space-y-6">
              <div className="text-center">
                <div className={`inline-block p-4 rounded-full mb-4 bg-white shadow-sm`}>
                  {path.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{path.title}</h2>
                <p className="text-gray-600 mt-2">{path.description}</p>
              </div>

              <Card className={`border-t-4 ${path.color}`}>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {path.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="text-gray-600 flex-shrink-0">{feature.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button 
                className="w-full"
                onClick={() => handlePathSelect(path.type)}
                disabled={isSubmitting !== null}
              >
                {isSubmitting === path.type ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Selecting...
                  </>
                ) : (
                  `Choose ${path.title}`
                )}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help Deciding?</h2>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  Talk to Advisor
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Compare Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}