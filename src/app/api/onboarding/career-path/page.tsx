'use client';

// src/app/onboarding/career-path/page.tsx
import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/forms/card";
import { Button } from "@/components/ui/forms/button";
import { Rocket, GraduationCap } from "lucide-react";
import { useState } from 'react';

export default function CareerPathPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handlePathSelection = async (path: 'SHORT_COURSE' | 'DEGREE_PROGRAM') => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/user/career-path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ careerPath: path }),
      });

      if (!response.ok) throw new Error('Failed to save career path');

      router.push('/onboarding/interests');
    } catch (error) {
      console.error('Error:', error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
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
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    1-3 months per course
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Focus on specific skills
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Flexible learning schedule
                  </li>
                </ul>
                <Button 
                  onClick={() => handlePathSelection('SHORT_COURSE')}
                  disabled={isLoading}
                  className="w-full"
                >
                  Choose Short Course
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
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    12-24 month full program
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Complete VFX curriculum
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Professional certification
                  </li>
                </ul>
                <Button 
                  onClick={() => handlePathSelection('DEGREE_PROGRAM')}
                  disabled={isLoading}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Choose Degree Program
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