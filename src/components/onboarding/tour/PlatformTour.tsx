// src/components/onboarding/tour/PlatformTour.tsx

"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent } from '@/components/ui/forms/card';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Loader2, ChevronRight, ChevronLeft } from 'lucide-react';

const tourSteps = [
  {
    id: 'dashboard',
    title: 'Your Dashboard',
    description: 'Your personalized learning hub. Track your progress, access courses, and manage your schedule.',
    image: '/tour/dashboard.png',
  },
  {
    id: 'courses',
    title: 'Course Library',
    description: 'Browse and access your enrolled courses. Each course includes video lessons, assignments, and resources.',
    image: '/tour/courses.png',
  },
  {
    id: 'tools',
    title: 'VFX Tools',
    description: 'Access professional-grade VFX tools and rendering capabilities directly from your browser.',
    image: '/tour/tools.png',
  },
  {
    id: 'community',
    title: 'Community',
    description: 'Connect with fellow students, join study groups, and participate in discussions.',
    image: '/tour/community.png',
  }
];

export function PlatformTour() {
  const router = useRouter();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isCompleting, setIsCompleting] = React.useState(false);

  const handleComplete = async () => {
    setIsCompleting(true);
    try {
      const response = await fetch('/api/user/complete-onboarding', {
        method: 'POST',
      });

      if (!response.ok) throw new Error('Failed to complete onboarding');

      toast({
        title: "Welcome aboard!",
        description: "You're all set to start your VFX journey.",
      });

      router.push('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to complete setup. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCompleting(false);
    }
  };

  const currentTourStep = tourSteps[currentStep];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-4xl mx-4">
        <CardContent className="p-6">
          <div className="relative aspect-video mb-8 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={currentTourStep.image}
              alt={currentTourStep.title}
              className="object-cover"
            />
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">{currentTourStep.title}</h2>
            <p className="text-gray-600">{currentTourStep.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(prev => prev - 1)}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {currentStep === tourSteps.length - 1 ? (
              <Button 
                onClick={handleComplete}
                disabled={isCompleting}
              >
                {isCompleting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Completing...
                  </>
                ) : (
                  <>
                    Start Learning
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentStep(prev => prev + 1)}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {tourSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}