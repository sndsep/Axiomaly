// src/components/onboarding/short-course/Survey.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/forms/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/forms/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/forms/radio-group';
import { Slider } from '@/components/ui/forms/slider';
import { Checkbox } from '@/components/ui/forms/checkbox';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { OnboardingLayout } from '../common/OnboardingLayout';
import { 
  VFX_SPECIALIZATIONS, 
  LEARNING_GOALS, 
  TIME_COMMITMENT_OPTIONS,
  SKILL_LEVELS 
} from '../constants';
import type { ShortCourseSurveyData } from '../types';

const formSchema = z.object({
  skillLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  primaryInterest: z.string().min(1, 'Please select your primary interest'),
  timeCommitment: z.number().min(1).max(40),
  learningGoals: z.array(z.string()).min(1, 'Please select at least one goal'),
});

export default function ShortCourseSurvey() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ShortCourseSurveyData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skillLevel: 'beginner',
      primaryInterest: '',
      timeCommitment: 10,
      learningGoals: [],
    },
  });

  const onSubmit = async (values: ShortCourseSurveyData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/onboarding/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to save survey responses');
      }

      toast({
        title: "Survey completed!",
        description: "Let's find the perfect courses for you.",
      });

      router.push('/onboarding/short-course/recommendations');
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
    <OnboardingLayout
      currentStep={2}
      careerPath="SHORT_COURSE"
      title="Quick Survey"
      description="Help us recommend the best courses for you"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Skill Level */}
          <FormField
            control={form.control}
            name="skillLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What's your current VFX skill level?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-3 gap-4"
                  >
                    {SKILL_LEVELS.map((level) => (
                      <FormItem key={level.value}>
                        <FormControl>
                          <RadioGroupItem
                            value={level.value}
                            id={level.value}
                            className="peer sr-only"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor={level.value}
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <span className="font-medium">{level.label}</span>
                          <span className="text-sm text-muted-foreground">
                            {level.description}
                          </span>
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Primary Interest */}
          <FormField
            control={form.control}
            name="primaryInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What interests you the most?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 gap-4"
                  >
                    {VFX_SPECIALIZATIONS.map((spec) => (
                      <FormItem key={spec.id}>
                        <FormControl>
                          <RadioGroupItem
                            value={spec.id}
                            id={spec.id}
                            className="peer sr-only"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor={spec.id}
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          {spec.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Time Commitment */}
          <FormField
            control={form.control}
            name="timeCommitment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How many hours per week can you dedicate to learning?
                </FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    <Slider
                      min={5}
                      max={40}
                      step={5}
                      value={[field.value]}
                      onValueChange={([value]) => field.onChange(value)}
                      className="w-full"
                    />
                    <div className="text-center font-medium">
                      {field.value} hours per week
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Learning Goals */}
          <FormField
            control={form.control}
            name="learningGoals"
            render={() => (
              <FormItem>
                <FormLabel>What are your learning goals?</FormLabel>
                <div className="grid grid-cols-2 gap-4">
                  {LEARNING_GOALS.map((goal) => (
                    <FormField
                      key={goal.id}
                      control={form.control}
                      name="learningGoals"
                      render={({ field }) => (
                        <FormItem
                          key={goal.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(goal.id)}
                              onCheckedChange={(checked) => {
                                const value = checked
                                  ? [...field.value, goal.id]
                                  : field.value?.filter((value) => value !== goal.id);
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {goal.label}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

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
    </OnboardingLayout>
  );
}