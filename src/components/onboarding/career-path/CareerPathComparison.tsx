// src/components/onboarding/career-path/CareerPathComparison.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  GraduationCap, 
  Clock, 
  Target, 
  Users,
  BookOpen,
  Trophy,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent } from '@/components/ui/forms/card';
import { useToast } from '@/components/ui/hooks/use-toast';

type CareerPathType = 'SHORT_COURSE' | 'DEGREE_PROGRAM';

interface CareerPathFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PathDetails {
  title: string;
  description: string;
  duration: string;
  focus: string;
  outcome: string;
  features: CareerPathFeature[];
  color: {
    light: string;
    main: string;
    dark: string;
  };
}

const CAREER_PATHS: Record<CareerPathType, PathDetails> = {
  SHORT_COURSE: {
    title: "Short Course",
    description: "Master specific VFX skills quickly",
    duration: "1-3 months per course",
    focus: "Specific VFX techniques",
    outcome: "Professional certificates",
    features: [
      {
        icon: <Clock className="w-5 h-5" />,
        title: "Flexible Schedule",
        description: "Learn at your own pace"
      },
      {
        icon: <Target className="w-5 h-5" />,
        title: "Focused Learning",
        description: "Master one skill at a time"
      },
      {
        icon: <Trophy className="w-5 h-5" />,
        title: "Quick Results",
        description: "See progress in weeks"
      }
    ],
    color: {
      light: "bg-blue-50",
      main: "bg-blue-500",
      dark: "bg-blue-600"
    }
  },
  DEGREE_PROGRAM: {
    title: "Degree Program",
    description: "Comprehensive VFX education",
    duration: "12-24 months",
    focus: "Complete VFX pipeline",
    outcome: "Industry-recognized degree",
    features: [
      {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Comprehensive Learning",
        description: "Master the complete VFX pipeline"
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Industry Mentorship",
        description: "Learn from professionals"
      },
      {
        icon: <GraduationCap className="w-5 h-5" />,
        title: "Career Support",
        description: "Job placement assistance"
      }
    ],
    color: {
      light: "bg-purple-50",
      main: "bg-purple-500",
      dark: "bg-purple-600"
    }
  }
};

export function CareerPathComparison() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedPath, setSelectedPath] = React.useState<CareerPathType | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handlePathSelect = async (path: CareerPathType) => {
    setSelectedPath(path);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/onboarding/career-path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: path }),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to save career path');
      }

      // Debugging Log
      console.log('Redirecting to:', path === 'SHORT_COURSE' 
        ? '/onboarding/short-course/survey'
        : '/onboarding/degree-program/survey');

      // Redirect based on selected path
      router.push(path === 'SHORT_COURSE' 
        ? '/onboarding/short-course/survey'
        : '/onboarding/degree-program/survey'
      );
      console.log('Redirect called');
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to save your selection. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      setSelectedPath(null);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        {(Object.entries(CAREER_PATHS) as [CareerPathType, PathDetails][]).map(([type, path]) => (
          <motion.div
            key={type}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className={`h-full ${
                selectedPath === type ? `ring-2 ring-${path.color.main}` : ''
              }`}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className={`rounded-lg ${path.color.light} p-4 mb-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    {type === 'SHORT_COURSE' ? (
                      <Rocket className={`w-8 h-8 text-${path.color.main}`} />
                    ) : (
                      <GraduationCap className={`w-8 h-8 text-${path.color.main}`} />
                    )}
                    <div>
                      <h3 className="text-xl font-bold">{path.title}</h3>
                      <p className="text-sm text-gray-600">{path.description}</p>
                    </div>
                  </div>

                  {/* Key Details */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Duration</p>
                      <p className="font-medium">{path.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Focus</p>
                      <p className="font-medium">{path.focus}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Outcome</p>
                      <p className="font-medium">{path.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-6">
                  {path.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${path.color.light}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  className="w-full"
                  onClick={() => handlePathSelect(type)}
                  disabled={isSubmitting}
                  variant={selectedPath === type ? "default" : "outline"}
                >
                  {isSubmitting && selectedPath === type ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      Choose {path.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Help Section */}
      <div className="mt-8 text-center">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Need Help Deciding?</h3>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Talk to Advisor
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Compare Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CareerPathComparison;