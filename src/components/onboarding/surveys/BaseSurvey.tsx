// src/components/onboarding/surveys/BaseSurvey.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/forms/button';
import { Form } from '@/components/ui/forms/form';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { OnboardingLayout } from '../common/OnboardingLayout';
import { OnboardingProgress } from '../common/OnboardingProgress';
import { ProgressBar } from '../common/ProgressBar';
import { SurveyQuestion } from '../common/SurveyQuestion';

export const baseSurveySchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
  weeklyHours: z.number().min(1).max(40),
  goals: z.array(z.string()).min(1, 'Please select at least one goal'),
});

export const vfxInterests = [
  { id: '3d-modeling', label: '3D Modeling', description: 'Create 3D assets and environments' },
  { id: 'animation', label: 'Animation', description: 'Bring characters and objects to life' },
  { id: 'compositing', label: 'Compositing', description: 'Combine visual elements seamlessly' },
  { id: 'lighting', label: 'Lighting', description: 'Set mood and atmosphere with lighting' },
  { id: 'texturing', label: 'Texturing', description: 'Create and apply surface materials' },
  { id: 'rigging', label: 'Rigging', description: 'Build character and object control systems' },
];

export function BaseSurvey({ 
  schema = baseSurveySchema,
  onSubmitEndpoint,
  nextStep,
  children 
}) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      experienceLevel: 'beginner',
      interests: [],
      weeklyHours: 10,
      goals: [],
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(onSubmitEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to save survey responses');
      }

      toast({
        title: "Survey completed!",
        description: "Your preferences have been saved successfully.",
      });

      router.push(nextStep);
    } catch (error) {
      console.error('Error saving survey:', error);
      toast({
        title: "Error",
        description: "Failed to save your responses. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <OnboardingLayout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ProgressBar progress={50} />
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <SurveyQuestion
                type="single"
                id="experienceLevel"
                label="What's your current level of experience with VFX?"
                required
                form={form}
                options={[
                  { id: 'beginner', label: 'Beginner', description: 'Little to no experience' },
                  { id: 'intermediate', label: 'Intermediate', description: 'Some experience' },
                  { id: 'advanced', label: 'Advanced', description: 'Significant experience' },
                ]}
                layout="horizontal"
              />

              <SurveyQuestion
                type="multiple"
                id="interests"
                label="Which areas of VFX are you most interested in?"
                description="Select up to 3 areas"
                required
                form={form}
                options={vfxInterests}
                maxSelect={3}
              />

              {children}

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Continue'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </OnboardingLayout>
  );
}

// src/components/onboarding/short-course/Survey.tsx
export function ShortCourseSurvey() {
  return (
    <BaseSurvey
      onSubmitEndpoint="/api/onboarding/short-course/survey"
      nextStep="/onboarding/short-course/recommendations"
    >
      <SurveyQuestion
        type="scale"
        id="weeklyHours"
        label="How many hours per week can you dedicate to learning?"
        required
        form={form}
        min={1}
        max={20}
        step={1}
        markers={[
          { value: 1, label: '1h' },
          { value: 10, label: '10h' },
          { value: 20, label: '20h' },
        ]}
      />
    </BaseSurvey>
  );
}

// src/components/onboarding/degree-program/Survey.tsx
export function DegreeProgramSurvey() {
  const extendedSchema = baseSurveySchema.extend({
    specializations: z.array(z.string()).min(1),
    careerGoals: z.array(z.string()).min(1),
    timeCommitment: z.number().min(10).max(40),
    priorEducation: z.string().optional(),
    portfolioUrl: z.string().url().optional().or(z.literal('')),
  });

  return (
    <BaseSurvey
      schema={extendedSchema}
      onSubmitEndpoint="/api/onboarding/degree-program/survey"
      nextStep="/onboarding/degree-program/curriculum"
    >
      <SurveyQuestion
        type="multiple"
        id="careerGoals"
        label="What are your career goals?"
        required
        form={form}
        options={[
          { id: 'studio-artist', label: 'Work at a major VFX studio' },
          { id: 'freelancer', label: 'Become a freelance artist' },
          { id: 'specialist', label: 'Specialize in a specific VFX area' },
          { id: 'technical-director', label: 'Become a Technical Director' },
        ]}
      />

      <SurveyQuestion
        type="scale"
        id="timeCommitment"
        label="How many hours per week can you commit to the program?"
        required
        form={form}
        min={10}
        max={40}
        step={5}
        markers={[
          { value: 10, label: '10h' },
          { value: 25, label: '25h' },
          { value: 40, label: '40h' },
        ]}
      />

      <SurveyQuestion
        type="text"
        id="portfolioUrl"
        label="Portfolio URL"
        description="If you have an existing portfolio, please provide the URL"
        form={form}
        placeholder="https://your-portfolio.com"
      />
    </BaseSurvey>
  );
}