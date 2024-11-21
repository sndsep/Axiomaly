// src/components/onboarding/career-path/CareerPathSelection.tsx
// This component allows the user to select their career path


'use client';

import React from 'react';
import { Rocket, GraduationCap, Clock, Target, Trophy, Users, BookOpen, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent } from '@/components/ui/forms/card';
import { Alert, AlertDescription } from '@/components/ui/forms/alert';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/hooks/use-toast';

type CareerPathType = 'SHORT_COURSE' | 'DEGREE_PROGRAM';

export function CareerPathSelection() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<CareerPathType | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const pathFeatures = {
    shortCourse: {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "Short Course",
      description: "Master specific skills fast",
      color: "border-blue-400",
      type: 'SHORT_COURSE' as const,
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
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "Degree Program",
      description: "Become a complete VFX artist",
      color: "border-purple-400",
      type: 'DEGREE_PROGRAM' as const,
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

  const selectPath = async (type: CareerPathType) => {
    if (isLoading) return;
    
    setIsLoading(type);
    setError(null);
    
    try {
      const response = await fetch('/api/onboarding/career-path', { // New route
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save career path');
      }

      // Use nextStep from response if it exists, otherwise use default route
      const nextRoute = data.nextStep || (type === 'SHORT_COURSE' 
        ? '/onboarding/short-course/survey'
        : '/onboarding/degree-program/survey');

      router.push(nextRoute);

    } catch (error) {
      console.error('Error in selectPath:', error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to save your selection. Please try again.';
      
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
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
                onClick={() => selectPath(path.type)}
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

export default CareerPathSelection;