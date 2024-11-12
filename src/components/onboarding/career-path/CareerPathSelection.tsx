//src/components/onboarding/career-path/CareerPathSelection.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Users, BookOpen } from 'lucide-react';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/forms/card';
import { Button } from '@/components/ui/forms/button';
import { CareerPathCard } from './CareerPathCard';
import { CareerPath } from '@prisma/client';

const CAREER_PATHS = {
  SHORT_COURSE: {
    title: 'Short Course',
    description: 'Master specific skills fast',
    icon: 'Rocket',
    duration: '1-3 months per course',
    focus: 'Specific VFX skills',
    outcome: 'Course certificates',
  },
  DEGREE_PROGRAM: {
    title: 'Degree Program',
    description: 'Become a complete VFX artist',
    icon: 'GraduationCap',
    duration: '12-24 months program',
    focus: 'Complete VFX education',
    outcome: 'Professional degree',
  }
} as const;

export function CareerPathSelection() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<CareerPath | null>(null);

  const handlePathSelection = async (type: CareerPath) => {
    if (isLoading) return;
    
    setIsLoading(type);
    try {
      const response = await fetch('/api/user/career-path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type }),
      });

      if (!response.ok) {
        throw new Error('Failed to save career path');
      }

      toast({
        title: "Path selected",
        description: `You've chosen the ${type === "SHORT_COURSE" ? "Short Course" : "Degree Program"} path.`,
      });

      router.push('/onboarding/interests');

    } catch (error) {
      console.error('Error saving career path:', error);
      toast({
        title: "Error",
        description: "Failed to save your selection. Please try again.",
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

        <div className="grid md:grid-cols-2 gap-8">
          {(Object.entries(CAREER_PATHS) as [CareerPath, typeof CAREER_PATHS[keyof typeof CAREER_PATHS]][]).map(([type, details]) => (
            <CareerPathCard
              key={type}
              type={type as CareerPath}
              details={details}
              isLoading={isLoading === type}
              onSelect={() => handlePathSelection(type as CareerPath)}
            />
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
                  asChild
                >
                  <a href="/advisor">
                    <Users className="w-4 h-4" />
                    Talk to Advisor
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href="/compare">
                    <BookOpen className="w-4 h-4" />
                    Compare Details
                  </a>
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