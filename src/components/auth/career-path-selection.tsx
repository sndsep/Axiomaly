// src/components/auth/career-path-selection.tsx
'use client';

import React from 'react';
import { Rocket, GraduationCap, Clock, Target, Users, BookOpen, Trophy, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent } from '@/components/ui/forms/card';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/hooks/use-toast';
import { CareerPath } from '@/types/onboarding';

export function CareerPathSelection() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<CareerPath | null>(null);

  const pathFeatures = [
    {
      type: CareerPath.SHORT_COURSE,
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "Short Course",
      description: "Master specific skills fast",
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
    {
      type: CareerPath.DEGREE_PROGRAM,
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "Degree Program",
      description: "Become a complete VFX artist",
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
  ];

  const handlePathSelection = async (path: 'SHORT_COURSE' | 'DEGREE_PROGRAM') => {
    try {
        setIsLoading(path);
        const response = await fetch('/api/user/career-path', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ careerPath: path }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to save career path');
        }

        toast({
            title: "Success!",
            description: "Your career path has been saved. Redirecting...",
        });

        const nextRoute = path === 'SHORT_COURSE' 
            ? '/onboarding/short-course/survey'
            : '/onboarding/degree-program/survey';
        
        router.push(nextRoute);
        
    } catch (error) {
        console.error('Error:', error);
        toast({
            title: "Error",
            description: error instanceof Error ? error.message : "Failed to save your selection. Please try again.",
            variant: "destructive",
        });
    } finally {
        setIsLoading(null);
    }
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Path</h1>
          <p className="text-xl text-gray-600">Select the journey that best fits your goals</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {pathFeatures.map((path) => (
            <div key={path.type} className="space-y-8">
              <div className="text-center">
                <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                  {path.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{path.title}</h2>
                <p className="text-gray-600 mt-2">{path.description}</p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {path.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="text-gray-600">{feature.icon}</div>
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
                onClick={() => handlePathSelection(path.type)}
                disabled={isLoading !== null}
              >
                {isLoading === path.type ? (
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

        <div className="mt-16 text-center">
          <Card>
            <CardContent className="p-8">
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