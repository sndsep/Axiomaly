// src/components/auth/career-path-selection.tsx
// This component is used to select the career path for the user during onboarding.


'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Rocket, 
  GraduationCap, 
  Clock, 
  Target, 
  Users,
  BookOpen,
  Trophy,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent } from '@/components/ui/forms/card';
import { useToast } from '@/components/ui/hooks/use-toast';

type CareerPathType = 'SHORT_COURSE' | 'DEGREE_PROGRAM';

export function CareerPathSelection() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<CareerPathType | null>(null);

  const selectPath = async (type: CareerPathType) => {
    if (isLoading) return;
    
    setIsLoading(type);
    try {
      const response = await fetch('/api/user/career-path', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to save career path');
      }

      toast({
        title: "Path selected!",
        description: "Redirecting to next step...",
      });

      // Redirect to the next onboarding step
      router.push('/onboarding/interests');

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

  const pathFeatures = {
    shortCourse: {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "Short Course",
      description: "Master specific skills fast",
      color: "blue",
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
      color: "purple",
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

  return (
    <section className="w-full max-w-5xl mx-auto p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Path</h1>
        <p className="text-xl text-gray-600">Select the journey that best fits your goals</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[pathFeatures.shortCourse, pathFeatures.degreeProgram].map((path) => (
          <div key={path.type} className="flex flex-col space-y-4">
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
                      <div className={`text-${path.color}-600`}>{feature.icon}</div>
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
              onClick={() => selectPath(path.type)}
              disabled={isLoading !== null}
              className={`w-full ${path.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'}`}
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

      <div className="mt-12">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-4">Need Help Deciding?</h2>
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
                onClick={() => router.push('/compare')}
              >
                <BookOpen className="w-4 h-4" />
                Compare Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}