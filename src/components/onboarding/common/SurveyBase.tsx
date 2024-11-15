// src/components/onboarding/common/SurveyBase.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { surveySchema } from '@/types/survey';
import { Form } from '@/components/ui/forms/form';
import { OnboardingStep, CareerPath } from '@prisma/client';
import { SurveyQuestion } from './SurveyQuestion';
import { OnboardingProgress } from './OnboardingProgress';

interface SurveyBaseProps {
  careerPath: CareerPath;
  initialData?: any;
  onSubmit: (data: any) => Promise<void>;
    // Start of Selection
    }
      experienceLevel: 'beginner',
      interests: [],
      weeklyHours: 10,
      goals: [],
      ...initialData
    }
  });

  const currentStep = careerPath === CareerPath.SHORT_COURSE 
    ? OnboardingStep.EXPERIENCE 
    : OnboardingStep.BACKGROUND;

  return (
    <div className="container mx-auto px-4 py-8">
      <OnboardingProgress currentStep={currentStep} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <SurveyQuestion
            type="single"
            id="experienceLevel"
            label="Experience Level"
            required
            form={form}
            options={[
              { id: 'beginner', label: 'Beginner' },
              { id: 'intermediate', label: 'Intermediate' },
              { id: 'advanced', label: 'Advanced' }
            ]}
          />
          {/* Add more questions based on careerPath */}
          {careerPath === CareerPath.DEGREE_PROGRAM && (
            <>
              <SurveyQuestion
                type="text"
                id="priorEducation"
                label="Prior Education"
                form={form}
              />
              <SurveyQuestion
                type="text"
                id="portfolioUrl"
                label="Portfolio URL"
                form={form}
              />
            </>
          )}
          <Button type="submit">Continue</Button>
        </form>
      </Form>
    </div>
  );
}

// src/components/onboarding/ShortCourseSurvey.tsx
import { CareerPath } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { SurveyBase } from './common/SurveyBase';

export function ShortCourseSurvey() {
  const router = useRouter();

  const onSubmit = async (data) => {
    await fetch('/api/onboarding/survey', {
      method: 'POST',
      body: JSON.stringify({ ...data, careerPath: CareerPath.SHORT_COURSE })
    });
    router.push('/onboarding/short-course/recommendations');
  };

  return <SurveyBase careerPath={CareerPath.SHORT_COURSE} onSubmit={onSubmit} />;
}

// src/components/onboarding/DegreeProgramSurvey.tsx
import { CareerPath } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { SurveyBase } from './common/SurveyBase';

export function DegreeProgramSurvey() {
  const router = useRouter();

  const onSubmit = async (data) => {
    await fetch('/api/onboarding/survey', {
      method: 'POST',
      body: JSON.stringify({ ...data, careerPath: CareerPath.DEGREE_PROGRAM })
    });
    router.push('/onboarding/degree-program/recommendations');
  };

  return <SurveyBase careerPath={CareerPath.DEGREE_PROGRAM} onSubmit={onSubmit} />;
}