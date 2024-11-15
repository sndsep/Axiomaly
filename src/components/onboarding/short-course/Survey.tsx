// src/components/onboarding/short-course/Survey.tsx
"use client";

import { BaseSurvey, baseSurveySchema } from '../surveys/BaseSurvey';
import { z } from 'zod';
import { SurveyQuestion } from '../common/SurveyQuestion';
import { useForm } from 'react-hook-form';

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

  return (
    <BaseSurvey
      schema={extendedSchema}
      onSubmitEndpoint="/api/onboarding/short-course/survey"
      nextStep="/onboarding/short-course/recommendations"
    >
      <div>
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
      </div>
    </BaseSurvey>
  );
}