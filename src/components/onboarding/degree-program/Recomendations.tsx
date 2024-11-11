// src/components/onboarding/degree-program/Recommendations.tsx
// This component renders the recommendations for degree programs
// It displays the recommended specializations and allows the user to select one


import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/forms/card';
import { Badge } from '@/components/ui/forms/badge';
import { Button } from '@/components/ui/forms/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs';
import { useToast } from '@/components/ui/hooks/use-toast';
import { OnboardingLayout } from '../common/OnboardingLayout';
import { ProgressBar } from '../common/ProgressBar';
import { 
  Briefcase,
  Code,
  Book,
  Users,
  Play,
  ChevronRight,
  Loader2,
  CheckCircle,
  Star
} from 'lucide-react';

interface Specialization {
  id: string;
  title: string;
  description: string;
  matchScore: number;
  skills: string[];
  careerPaths: string[];
  courses: {
    foundation: string[];
    advanced: string[];
  };
  tools: string[];
  projects: string[];
}

interface RecommendationProps {
  userPreferences: {
    experienceLevel: string;
    specializations: string[];
    careerGoals: string[];
  };
}

interface SpecializationCardProps {
  specialization: Specialization;
  isSelected: boolean;
  onSelect: () => void;
  isLoading?: boolean;
}

const SpecializationCard = ({ 
  specialization,
  isSelected,
  onSelect,
  isLoading
}: SpecializationCardProps) => {
  return (
    <Card className={`transition-all ${isSelected ? 'border-purple-400 shadow-lg' : 'hover:border-purple-200'}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{specialization.title}</h3>
            <p className="text-gray-600 line-clamp-2 mb-2">
              {specialization.description}
            </p>
          </div>
          <Badge variant="secondary" className="bg-purple-50 text-purple-700">
            {specialization.matchScore}% Match
          </Badge>
        </div>

        <Tabs defaultValue="overview" className="mb-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="careers">Careers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4 pt-4">
            <div className="flex flex-wrap gap-2">
              {specialization.skills.map((skill) => (
                <Badge key={skill} variant="outline">{skill}</Badge>
              ))}
            </div>
            <div>
              <h4 className="font-medium mb-2">Key Projects</h4>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {specialization.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="courses" className="pt-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Foundation Courses</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {specialization.courses.foundation.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Advanced Courses</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {specialization.courses.advanced.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="pt-4">
            <div className="grid grid-cols-2 gap-2">
              {specialization.tools.map((tool) => (
                <div key={tool} className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <span className="text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="careers" className="pt-4">
            <div className="space-y-2">
              {specialization.careerPaths.map((career) => (
                <div key={career} className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm">{career}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Button 
          onClick={onSelect}
          className="w-full"
          variant={isSelected ? "secondary" : "default"}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Selecting...
            </>
          ) : isSelected ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Selected
            </>
          ) : (
            <>
              Choose Specialization
              <ChevronRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default function SpecializationRecommendations({ userPreferences }: RecommendationProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock specializations - in production this would come from an API
  const specializations: Specialization[] = [
    {
      id: 'vfx-compositing',
      title: 'VFX Compositing',
      description: 'Master advanced compositing techniques for film and television.',
      matchScore: 95,
      skills: ['Compositing', 'Color Correction', 'Rotoscoping', 'Keying'],
      careerPaths: ['Compositing Artist', 'Compositing Supervisor', 'VFX Producer'],
      courses: {
        foundation: ['Digital Compositing I', 'Color Theory', 'Image Processing'],
        advanced: ['Advanced Compositing', 'Digital Matte Painting', 'Stereoscopic Compositing']
      },
      tools: ['Nuke', 'After Effects', 'Mocha Pro', 'Silhouette'],
      projects: ['Feature Film Shot Recreation', 'Commercial VFX Integration']
    },
    {
      id: 'fx-simulation',
      title: 'FX & Simulation',
      description: 'Specialize in creating realistic simulations and particle effects.',
      matchScore: 88,
      skills: ['Particle Systems', 'Fluid Dynamics', 'Rigid Body Physics'],
      careerPaths: ['FX Artist', 'Technical Director', 'Simulation Specialist'],
      courses: {
        foundation: ['Introduction to FX', 'Physics for VFX', 'Particle Systems'],
        advanced: ['Advanced Dynamics', 'Fluid Simulation', 'Destruction Effects']
      },
      tools: ['Houdini', 'RealFlow', 'FumeFX', 'Thinking Particles'],
      projects: ['Natural Phenomena Simulation', 'Destruction Sequence']
    },
  ];

  const handleSelectSpecialization = async (specializationId: string) => {
    const newSelection = selectedSpecializations.includes(specializationId)
      ? selectedSpecializations.filter(id => id !== specializationId)
      : [...selectedSpecializations, specializationId];
    
    setSelectedSpecializations(newSelection);
  };

  const handleContinue = async () => {
    if (selectedSpecializations.length === 0) {
      toast({
        title: "Selection required",
        description: "Please select at least one specialization to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/onboarding/select-specializations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ specializations: selectedSpecializations }),
      });

      if (!response.ok) {
        throw new Error('Failed to save specialization selection');
      }

      toast({
        title: "Great choice!",
        description: "Let's complete your profile to get started.",
      });

      router.push('/onboarding/degree-program/profile');
    } catch (error) {
      console.error('Error saving specializations:', error);
      toast({
        title: "Error",
        description: "Failed to save your selection. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <OnboardingLayout
      currentStep={4}
      careerPath="DEGREE_PROGRAM"
      title="Choose Your Specializations"
      description="Select the areas you want to focus on during your program"
    >
      {/* Specialization Cards */}
      <div className="space-y-6">
        {specializations.map((spec) => (
          <SpecializationCard
            key={spec.id}
            specialization={spec}
            isSelected={selectedSpecializations.includes(spec.id)}
            onSelect={() => handleSelectSpecialization(spec.id)}
            isLoading={isLoading && selectedSpecializations.includes(spec.id)}
          />
        ))}
      </div>

      {/* Continue Button */}
      <div className="mt-8">
        <Button
          className="w-full"
          onClick={handleContinue}
          disabled={isLoading || selectedSpecializations.length === 0}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            'Continue to Profile Setup'
          )}
        </Button>
      </div>

      {/* Help Section */}
      <div className="mt-8">
        <Card>
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">Need Help Deciding?</h3>
              <p className="text-gray-600">
                Our advisors can help you choose the right specializations for your career goals
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
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => router.push('/compare-specializations')}
                >
                  <Star className="w-4 h-4" />
                  Compare Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </OnboardingLayout>
  );
}