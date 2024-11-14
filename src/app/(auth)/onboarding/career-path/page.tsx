// src/app/(auth)/onboarding/career-path/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/forms/card";
import { Button } from "@/components/ui/forms/button";
import { GraduationCap, Rocket } from "lucide-react";
import { useToast } from "@/components/ui/hooks/use-toast";

export default function CareerPathPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<string | null>(null);

  async function handlePathSelection(type: 'SHORT_COURSE' | 'DEGREE_PROGRAM') {
    try {
      setIsLoading(type);
      const response = await fetch('/api/user/career-path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ careerPath: type }),
      });

      if (!response.ok) {
        throw new Error('Failed to save career path');
      }

      toast({
        title: "Career path selected",
        description: "Redirecting to the next step...",
      });

      // Redirect based on selection
      router.push(type === 'SHORT_COURSE' 
        ? '/onboarding/short-course/survey'
        : '/onboarding/degree-program/survey'
      );
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your selection. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Choose Your Path</h1>
        <p className="mt-4 text-lg text-gray-600">
          Select the path that best matches your goals and availability
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Short Course Card */}
        <Card className="relative overflow-hidden border-2 hover:border-blue-500 transition-all">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Short Course</h2>
              <p className="text-gray-600 mb-6">
                Perfect for learning specific VFX skills quickly
              </p>
              <ul className="space-y-3 text-left mb-8">
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
                className="w-full"
                onClick={() => handlePathSelection('SHORT_COURSE')}
                disabled={!!isLoading}
              >
                Select Short Course
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Degree Program Card */}
        <Card className="relative overflow-hidden border-2 hover:border-purple-500 transition-all">
          <CardContent className="p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Degree Program</h2>
              <p className="text-gray-600 mb-6">
                Comprehensive education to become a VFX professional
              </p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  12-24 month program
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
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={() => handlePathSelection('DEGREE_PROGRAM')}
                disabled={!!isLoading}
              >
                Select Degree Program
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p>
          Need help deciding?{' '}
          <button className="text-blue-600 hover:underline">
            Talk to a career advisor
          </button>
        </p>
      </div>
    </div>
  );
}