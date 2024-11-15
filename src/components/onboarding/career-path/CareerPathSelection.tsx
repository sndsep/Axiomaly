// src/components/onboarding/career-path/CareerPathSelection.tsx
'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/forms/card";
import { Button } from "@/components/ui/forms/button";
import { Rocket, GraduationCap, Loader2 } from "lucide-react";
import { useState } from 'react';
import { useToast } from "@/components/ui/hooks/use-toast";
import { CareerPath, CareerPathSelection as CareerPathSelectionType } from '@/types/onboarding';

export function CareerPathSelection() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<CareerPath | null>(null);

  const handlePathSelection = async (type: CareerPath) => {
    try {
      setIsLoading(type);
      const payload: CareerPathSelectionType = { type };

      const response = await fetch('/api/user/career-path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Career Path API Error:', errorData);
        throw new Error(errorData.message || 'Failed to save career path');
      }

      const data = await response.json();
      const pathSegment = type === CareerPath.SHORT_COURSE ? 'short-course' : 'degree-program';
      console.log('Redirecting to:', `/onboarding/${pathSegment}/survey`);
      router.push(`/onboarding/${pathSegment}/survey`);

      console.log('Career Path Selected:', type);
      console.log('API Response:', data);

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to save your selection.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Learning Path
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Select the path that best matches your goals and availability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Short Course Path */}
          <Card className="relative hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-100 rounded-full mb-4">
                  <Rocket className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Short Course</h2>
                <p className="text-gray-600 mb-4">
                  Perfect for learning specific VFX skills quickly
                </p>
                <Button 
                  onClick={() => handlePathSelection(CareerPath.SHORT_COURSE)}
                  disabled={isLoading !== null}
                  className="w-full"
                >
                  {isLoading === CareerPath.SHORT_COURSE ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Selecting...
                    </>
                  ) : (
                    'Choose Short Course'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Degree Program Path */}
          <Card className="relative hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Degree Program</h2>
                <p className="text-gray-600 mb-4">
                  Comprehensive education to become a VFX professional
                </p>
                <Button 
                  onClick={() => handlePathSelection(CareerPath.DEGREE_PROGRAM)}
                  disabled={isLoading !== null}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  {isLoading === CareerPath.DEGREE_PROGRAM ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Selecting...
                    </>
                  ) : (
                    'Choose Degree Program'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Need help deciding? <a href="/career-advisor" className="text-blue-600 hover:underline">Talk to a career advisor</a></p>
        </div>
      </div>
    </div>
  );
}