// src/components/onboarding/degree-program/Survey.tsx
'use client';

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
import { SurveyQuestion } from '../common/SurveyQuestion';
import { 
  VFX_SPECIALIZATIONS, 
  LEARNING_GOALS, 
  LEARNING_STYLES,
  TIME_COMMITMENT_OPTIONS,
  SKILL_LEVELS 
} from '../constants';
import type { ComprehensiveSurveyData } from '../types';
import React from 'react';

const surveySchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  specializations: z.array(z.string()).min(1, 'Please select at least one specialization'),
  careerGoals: z.array(z.string()).min(1, 'Please select at least one career goal'),
  timeCommitment: z.number().min(10).max(40),
  preferredLearningStyle: z.array(z.string()).min(1, 'Please select at least one learning style'),
  priorEducation: z.string().optional(),
  portfolioUrl: z.string().url().optional().or(z.literal('')),
});

export default function ComprehensiveSurvey() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/onboarding/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to save survey responses');
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
              {/* Experience Level */}
              <SurveyQuestion
                type="single"
                id="experienceLevel"
                label="What's your current experience level with VFX?"
                description="This helps us adjust the curriculum difficulty"
                options={SKILL_LEVELS.map(level => ({
                  id: level.value,
                  label: level.label,
                  description: level.description,
                }))}
                form={form}
                required
                layout="horizontal"
              />

              {/* Specializations */}
              <SurveyQuestion
                type="multiple"
                id="specializations"
                label="Which areas would you like to specialize in?"
                description="Select all areas that interest you - you can refine these later"
                options={VFX_SPECIALIZATIONS.map(spec => ({
                  id: spec.id,
                  label: spec.label,
                }))}
                form={form}
                required
              />

              {/* Career Goals */}
              <SurveyQuestion
                type="multiple"
                id="careerGoals"
                label="What are your career goals?"
                description="Where do you see yourself in the VFX industry?"
                options={LEARNING_GOALS.map(goal => ({
                  id: goal.id,
                  label: goal.label,
                }))}
                form={form}
                required
              />

              {/* Time Commitment */}
              <SurveyQuestion
                type="scale"
                id="timeCommitment"
                label="How many hours per week can you dedicate to your studies?"
                description="We recommend at least 20 hours per week for optimal progress"
                min={10}
                max={40}
                step={5}
                markers={TIME_COMMITMENT_OPTIONS.map(option => ({
                  value: option.value,
                  label: option.label,
                }))}
                form={form}
                required
              />

              {/* Learning Style */}
              <SurveyQuestion
                type="multiple"
                id="preferredLearningStyle"
                label="How do you learn best?"
                description="Select all that apply - we'll tailor your learning experience"
                options={LEARNING_STYLES.map(style => ({
                  id: style.id,
                  label: style.label,
                }))}
                form={form}
                required
              />

              {/* Prior Education */}
              <SurveyQuestion
                type="text"
                id="priorEducation"
                label="Prior Education or Training"
                description="Tell us about any relevant education or training you have (optional)"
                multiline
                placeholder="e.g., Bachelor's in Animation, Self-taught 3D modeling..."
                form={form}
              />

              {/* Portfolio URL */}
              <SurveyQuestion
                type="text"
                id="portfolioUrl"
                label="Portfolio URL"
                description="Share your existing work if you have any (optional)"
                placeholder="https://your-portfolio.com"
                form={form}
              />

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Continue to Curriculum Plan'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </OnboardingLayout>
  );
}