// src/components/onboarding/degree-program/Curriculum.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/forms/button';
import { Badge } from '@/components/ui/forms/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs';
import { useToast } from '@/components/ui/hooks/use-toast';
import { 
  Clock,
  GraduationCap,
  BookOpen,
  Trophy,
  Download,
  Loader2,
  ChevronRight,
  Users,
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  credits: number;
  description?: string;
  required: boolean;
}

interface Milestone {
  title: string;
  description: string;
}

interface CurriculumModule {
  term: number;
  courses: Course[];
  milestone?: Milestone;
}

// Term card component
const TermCard = ({ term, courses, milestone }: CurriculumModule) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Term {term}</h3>
        <Badge variant="secondary">
          {courses.reduce((acc, course) => acc + course.credits, 0)} Credits
        </Badge>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex items-start justify-between p-3 rounded-lg bg-gray-50"
          >
            <div>
              <h4 className="font-medium">{course.title}</h4>
              {course.description && (
                <p className="text-sm text-gray-600 mt-1">{course.description}</p>
              )}
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <Clock className="w-4 h-4" />
                {course.credits} Credits
                {course.required && (
                  <Badge variant="outline" className="ml-2">Required</Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {milestone && (
        <div className="border-t pt-4 mt-4">
          <div className="flex items-start gap-3">
            <Trophy className="w-5 h-5 text-yellow-500 mt-1" />
            <div>
              <h4 className="font-medium text-yellow-700">{milestone.title}</h4>
              <p className="text-sm text-gray-600">{milestone.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Curriculum() {
  const router = useRouter();
  const { toast } = useToast();
  const [isAccepting, setIsAccepting] = useState(false);
  const selectedSpecialization = 'your_specialization_value';

  // This would come from an API based on user preferences in production
  const curriculumPlan: CurriculumModule[] = [
    {
      term: 1,
      courses: [
        { id: '1', title: "Foundations of 3D Graphics", credits: 3, required: true },
        { id: '2', title: "Digital Art Fundamentals", credits: 3, required: true },
        { id: '3', title: "Introduction to VFX Pipeline", credits: 3, required: true },
      ],
      milestone: {
        title: "Foundation Portfolio",
        description: "Complete your first VFX shots showcasing basic techniques"
      }
    },
    // ... otros términos
  ];

  const handleAcceptPlan = async () => {
    setIsAccepting(true);
    try {
      const response = await fetch('/api/onboarding/accept-curriculum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accepted: true, specialization: selectedSpecialization }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save curriculum acceptance');
      }
  
      toast({
        title: "Curriculum plan accepted!",
        description: "Let's continue with your profile setup.",
      });
  
      router.push('/onboarding/profile');
  
    } catch (error) {
      console.error('Error accepting curriculum:', error);
      toast({
        title: "Error",
        description: "Failed to save your acceptance. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAccepting(false);
    }
  };

  return (
    <div className="p-8">
      {/* Program Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="font-medium">Duration</h3>
              <p className="text-sm text-gray-600">24 months</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-purple-600" />
            <div>
              <h3 className="font-medium">Total Courses</h3>
              <p className="text-sm text-gray-600">12 Courses</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-green-600" />
            <div>
              <h3 className="font-medium">Credits</h3>
              <p className="text-sm text-gray-600">36 Credits</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <div>
              <h3 className="font-medium">Milestones</h3>
              <p className="text-sm text-gray-600">4 Major Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Terms */}
      <Tabs defaultValue="term1" className="mb-8">
        <TabsList className="grid grid-cols-4 mb-6">
          {[1, 2, 3, 4].map((term) => (
            <TabsTrigger key={term} value={`term${term}`}>Term {term}</TabsTrigger>
          ))}
        </TabsList>
        {curriculumPlan.map((term, index) => (
          <TabsContent key={`term${index + 1}`} value={`term${index + 1}`}>
            <TermCard {...term} />
          </TabsContent>
        ))}
      </Tabs>

      {/* Accept Plan Section */}
      <div className="bg-gray-50 rounded-lg p-8 text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Accept this curriculum plan to start your VFX education. You can always adjust
          your specialization and courses later.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            onClick={handleAcceptPlan}
            disabled={isAccepting}
            className="min-w-[200px]"
          >
            {isAccepting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Accept & Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-[200px]"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-white rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold mb-4">Need to Discuss?</h3>
        <p className="text-gray-600 mb-6">
          Our academic advisors can help you customize your learning path
        </p>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => router.push('/advisor')}
        >
          <Users className="w-4 h-4" />
          Talk to Advisor
        </Button>
      </div>
    </div>
  );
}