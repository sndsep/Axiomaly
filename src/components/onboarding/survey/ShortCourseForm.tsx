'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useOnboarding } from '@/contexts/onboarding-context';
import { Button } from '@/components/ui/forms/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/forms/form';
import { ExperienceLevelSelect } from './ExperienceLevelSelect';
import { InterestSelection } from './InterestSelection';
import { Input } from '@/components/ui/forms/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/forms/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/forms/card';

const timeframeOptions = [
  { value: '1-3', label: '1-3 months' },
  { value: '3-6', label: '3-6 months' },
  { value: '6-12', label: '6-12 months' },
] as const;

const formSchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1, 'Select at least one area of interest').max(3),
  weeklyHours: z.coerce
    .number()
    .min(1, 'Minimum 1 hour per week')
    .max(40, 'Maximum 40 hours per week'),
  timeframe: z.enum(['1-3', '3-6', '6-12']),
  primaryGoal: z.string().min(1, 'Please describe your primary goal'),
});

type FormData = z.infer<typeof formSchema>;

export function ShortCourseForm() {
  const { dispatch, nextStep } = useOnboarding();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      experienceLevel: 'beginner',
      interests: [],
      weeklyHours: 5,
      timeframe: '1-3',
      primaryGoal: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Save survey responses
      await fetch('/api/user/onboarding/short-course-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // Update onboarding context
      dispatch({ 
        type: 'SET_SURVEY_RESPONSES', 
        payload: data 
      });

      // Move to next step
      nextStep();
    } catch (error) {
      console.error('Error saving survey:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Survey</CardTitle>
        <CardDescription>
          Help us personalize your learning experience by telling us a bit about yourself.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Experience Level */}
            <FormField
              control={form.control}
              name="experienceLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's your experience level with VFX?</FormLabel>
                  <FormControl>
                    <ExperienceLevelSelect
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Interests */}
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which areas interest you the most?</FormLabel>
                  <FormControl>
                    <InterestSelection
                      selectedInterests={field.value}
                      onChange={field.onChange}
                      maxSelections={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Weekly Hours */}
            <FormField
              control={form.control}
              name="weeklyHours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How many hours can you dedicate per week?</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={40}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Timeframe */}
            <FormField
              control={form.control}
              name="timeframe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's your preferred learning timeframe?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timeframeOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Primary Goal */}
            <FormField
              control={form.control}
              name="primaryGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's your primary goal for taking this course?</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., Learn character animation for my portfolio"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Continue'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}