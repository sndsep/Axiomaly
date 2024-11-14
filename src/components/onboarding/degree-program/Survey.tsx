'use client';
// src/components/onboarding/degree-program/Survey.tsx

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
import { OnboardingStep } from '@prisma/client';
import type { ComprehensiveSurveyData } from '../types';
import React from 'react';
import { getServerSession } from "next-auth/next"; // Import for session handling
import { authOptions } from '@/lib/auth';

const surveySchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  specializations: z.array(z.string()).min(1, 'Please select at least one specialization'),
  careerGoals: z.array(z.string()).min(1, 'Please select at least one career goal'),
  timeCommitment: z.number().min(10).max(40),
  preferredLearningStyle: z.array(z.string()).min(1, 'Please select at least one learning style'),
  priorEducation: z.string().optional(),
  portfolioUrl: z.string().url().optional().or(z.literal('')),
});

const steps = [
  { id: OnboardingStep.EXPERIENCE, title: 'Experience Level', description: 'Select your experience level' },
  { id: OnboardingStep.GOALS, title: 'Career Goals', description: 'Select your career goals' },
  { id: OnboardingStep.SCHEDULE, title: 'Time Commitment', description: 'Select your time commitment' },
  { id: OnboardingStep.BACKGROUND, title: 'Prior Education', description: 'Provide your prior education' },
  { id: OnboardingStep.PORTFOLIO, title: 'Portfolio URL', description: 'Provide your portfolio URL' },
];

export default function ComprehensiveSurvey() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(OnboardingStep.EXPERIENCE);
  const completedSteps = [OnboardingStep.EXPERIENCE];

  const form = useForm<ComprehensiveSurveyData>({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      experienceLevel: 'beginner',
      specializations: [],
      careerGoals: [],
      timeCommitment: 20,
      preferredLearningStyle: [],
      priorEducation: '',
      portfolioUrl: '',
    },
  });

  const onSubmit = async (data: ComprehensiveSurveyData) => {
    console.log('Form Data:', data); // Log form data for debugging
    setIsSubmitting(true);
    try {
      const session = await getServerSession(authOptions); // Get session to access user ID
      const userId = session?.user?.id; // Ensure you have the user ID

      const response = await fetch('/api/onboarding/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to save survey responses');
      }

      // Update OnboardingProgress with responses
      const progressResponse = await fetch('/api/onboarding/progress', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId,
          responses: data,
          currentStep: OnboardingStep.GOALS, // Move to the next step
        }),
      });

      if (!progressResponse.ok) {
        throw new Error('Failed to update onboarding progress');
      }

      toast({
        title: "Survey completed!",
        description: "Let's create your personalized curriculum plan.",
      });

      router.push('/onboarding/degree-program/curriculum');
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
          <OnboardingProgress steps={steps} currentStep={currentStep} completedSteps={completedSteps} />
          <ProgressBar />
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Survey
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Help us create your personalized VFX education journey
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <label>Experience Level</label>
                <select {...form.register("experienceLevel")}>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </OnboardingLayout>
  );
}