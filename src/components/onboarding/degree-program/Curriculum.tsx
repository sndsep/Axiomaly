// src/components/onboarding/degree-program/Curriculum.tsx

// This component renders the curriculum plan for degree programs 
// It displays the curriculum plan and allows the user to accept it

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/forms/button';
import { Card, CardHeader, CardContent } from '@/components/ui/forms/card';
import { Badge } from '@/components/ui/forms/badge';
import { useToast } from '@/components/ui/hooks/use-toast';
import { OnboardingLayout } from '../common/OnboardingLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs';
import { 
  Clock,
  GraduationCap,
  BookOpen,
  Trophy,
  Calendar,
  Download,
  Loader2,
  ChevronRight,
  Users,
} from 'lucide-react';
import type { CurriculumModule } from '../types';

interface CurriculumPlanProps {
  userPreferences: {
    experienceLevel: string;
    specializations: string[];
    careerGoals: string[];
    timeCommitment: number;
    preferredLearningStyle: string[];
  };
}

// Term card component
const TermCard = ({ term, courses, milestone }: CurriculumModule) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Term {term}</h3>
          <Badge variant="secondary">
            {courses.reduce((acc, course) => acc + course.credits, 0)} Credits
          </Badge>
        </div>

        <div className="space-y-4 mb-6">
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
          <div className="border-t pt-4">
            <div className="flex items-start gap-3">
              <Trophy className="w-5 h-5 text-yellow-500 mt-1" />
              <div>
                <h4 className="font-medium text-yellow-700">{milestone.title}</h4>
                <p className="text-sm text-gray-600">{milestone.description}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function CurriculumPlan({ userPreferences }: CurriculumPlanProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isAccepting, setIsAccepting] = useState(false);

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
    {
      term: 2,
      courses: [
        { id: '4', title: "3D Modeling & Texturing", credits: 3, required: true },
        { id: '5', title: "Lighting & Rendering I", credits: 3, required: true },
        { id: '6', title: "Compositing Fundamentals", credits: 3, required: true },
      ],
      milestone: {
        title: "Technical Proficiency",
        description: "Master core VFX software and workflows"
      }
    },
    {
      term: 3,
      courses: [
        { id: '7', title: "Character Animation", credits: 3, required: true },
        { id: '8', title: "Advanced Texturing", credits: 3, required: false },
        { id: '9', title: "FX & Dynamics", credits: 3, required: true },
      ],
      milestone: {
        title: "Specialization Project",
        description: "Create complex VFX sequences in your chosen specialization"
      }
    },
    {
      term: 4,
      courses: [
        { id: '10', title: "Advanced Compositing", credits: 3, required: true },
        { id: '11', title: "Portfolio Development", credits: 3, required: true },
        { id: '12', title: "Industry Project", credits: 6, required: true },
      ],
      milestone: {
        title: "Industry-Ready Portfolio",
        description: "Complete your professional portfolio and showreel"
      }
    },
  ];

  const handleAcceptPlan = async () => {
    setIsAccepting(true);
    try {
      const response = await fetch('/api/onboarding/accept-curriculum', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accepted: true }),
      });

      if (!response.ok) {
        throw new Error('Failed to save curriculum acceptance');
      }

      toast({
        title: "Curriculum plan accepted!",
        description: "Let's continue with your specialization selections.",
      });

      router.push('/onboarding/degree-program/recommendations');
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
    <OnboardingLayout
      currentStep={3}
      careerPath="DEGREE_PROGRAM"
      title="Your Personalized Curriculum Plan"
      description="Based on your goals and experience, we've crafted a comprehensive learning path"
    >
      {/* Program Overview */}
      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <h3 className="font-medium">Duration</h3>
                  <p className="text-sm text-gray-600">24 months</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <div>
                  <h3 className="font-medium">Total Courses</h3>
                  <p className="text-sm text-gray-600">12 Courses</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-green-600" />
                <div>
                  <h3 className="font-medium">Credits</h3>
                  <p className="text-sm text-gray-600">36 Credits</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-yellow-600" />
                <div>
                  <h3 className="font-medium">Milestones</h3>
                  <p className="text-sm text-gray-600">4 Major Projects</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Curriculum Terms */}
      <Tabs defaultValue="term1" className="mb-8">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="term1">Term 1</TabsTrigger>
          <TabsTrigger value="term2">Term 2</TabsTrigger>
          <TabsTrigger value="term3">Term 3</TabsTrigger>
          <TabsTrigger value="term4">Term 4</TabsTrigger>
        </TabsList>
        {curriculumPlan.map((term, index) => (
          <TabsContent key={`term${index + 1}`} value={`term${index + 1}`}>
            <TermCard {...term} />
          </TabsContent>
        ))}
      </Tabs>

      {/* Accept Plan Section */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl font-bold">Ready to Begin Your Journey?</h2>
            <p className="text-gray-600 max-w-2xl">
              Accept this curriculum plan to start your VFX education. You can always adjust your specialization and courses later.
            </p>
            <div className="flex gap-4">
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
                onClick={() => router.push('/curriculum-details.pdf')}
                className="min-w-[200px]"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Help Section */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Need to Discuss?</h3>
            <p className="text-gray-600">
              Our academic advisors can help you customize your learning path
            </p>
            <div className="flex justify-center gap-4">
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
        </CardContent>
      </Card>
    </OnboardingLayout>
  );
}