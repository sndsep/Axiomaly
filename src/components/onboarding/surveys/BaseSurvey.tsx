// src/components/onboarding/surveys/BaseSurvey.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, useFormContext, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/forms/button';
import { Form } from '@/components/ui/forms/form';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { OnboardingLayout } from '../common/OnboardingLayout';
import { OnboardingProgress } from '../common/OnboardingProgress';
import { ProgressBar } from '../common/ProgressBar';
import { SurveyQuestion as SurveyQuestionComponent } from '../common/SurveyQuestion';

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

export function BaseSurvey({ children, ...props }) {
  return (
    <OnboardingLayout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <FormProvider {...props.form}>
          <form onSubmit={props.onSubmit} className="space-y-8">
            {children}
            <Button type="submit">Continue</Button>
          </form>
        </FormProvider>
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
      <SurveyQuestionComponent
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
      <SurveyQuestionComponent
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

      <SurveyQuestionComponent
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

      <SurveyQuestionComponent
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

export function SurveyQuestion({ id, label, ...props }) {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register(id)} {...props} />
    </div>
  );
}

export function Survey() {
    const extendedSchema = baseSurveySchema.extend({
        specializations: z.array(z.string()).min(1),
        careerGoals: z.array(z.string()).min(1),
        timeCommitment: z.number().min(10).max(40),
        priorEducation: z.string().optional(),
        portfolioUrl: z.string().url().optional().or(z.literal('')),
    });

    const form = useForm({
        defaultValues: {
            careerGoals: [],
            timeCommitment: 10,
            priorEducation: '',
            portfolioUrl: '',
            specializations: [],
        },
    });

    const onSubmit = (data) => {
        // Maneja el envío de datos aquí
    };

    return (
        <BaseSurvey
            schema={extendedSchema}
            onSubmit={form.handleSubmit(onSubmit)}
        >
            <SurveyQuestionComponent
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
            {/* Otros componentes de SurveyQuestion */}
        </BaseSurvey>
    );
}