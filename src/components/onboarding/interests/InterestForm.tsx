//src/components/onboarding/interests/InterestForm.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { Button } from '@/components/ui/forms/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/forms/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/forms/radio-group';
import { Checkbox } from '@/components/ui/forms/checkbox';
import { Input } from '@/components/ui/forms/input';
import { useToast } from '@/components/ui/hooks/use-toast';
import { 
  VFX_SPECIALIZATIONS, 
  SKILL_LEVELS, 
  LEARNING_GOALS, 
  TIME_COMMITMENT_OPTIONS 
} from '../constants';


const formSchema = z.object({
  skillLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1, 'Please select at least one area of interest'),
  timeCommitment: z.number().min(5).max(40),
  learningGoals: z.array(z.string()).min(1, 'Please select at least one goal'),
});

type FormValues = z.infer<typeof formSchema>;

export function InterestForm() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skillLevel: 'beginner',
      interests: [],
      timeCommitment: 10,
      learningGoals: [],
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch('/api/user/onboarding/interests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to save preferences');
      }

      toast({
        title: "Preferences saved",
        description: "Your learning preferences have been saved successfully.",
      });

      router.push('/onboarding/recommendations');

    } catch (error) {
      console.error('Error saving preferences:', error);
      toast({
        title: "Error",
        description: "Failed to save your preferences. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Tell us about your interests</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Skill Level */}
            <FormField
              control={form.control}
              name="skillLevel"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>What's your current skill level?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-3 gap-4"
                    >
                      {SKILL_LEVELS.map(level => (
                        <FormItem key={level.value} className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={level.value} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {level.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* VFX Specializations */}
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which areas interest you the most?</FormLabel>
                  <div className="grid grid-cols-2 gap-4">
                    {VFX_SPECIALIZATIONS.map(specialization => (
                      <FormItem
                        key={specialization.id}
                        className="flex items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(specialization.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, specialization.id])
                                : field.onChange(field.value?.filter((value) => value !== specialization.id));
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {specialization.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </div>
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
                  <FormLabel>Weekly time commitment (hours)</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(Number(value))}
                      defaultValue={field.value.toString()}
                      className="grid grid-cols-5 gap-4"
                    >
                      {TIME_COMMITMENT_OPTIONS.map(option => (
                        <FormItem key={option.value} className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value={option.value.toString()} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Learning Goals */}
            <FormField
              control={form.control}
              name="learningGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are your learning goals?</FormLabel>
                  <div className="grid grid-cols-2 gap-4">
                    {LEARNING_GOALS.map(goal => (
                      <FormItem
                        key={goal.id}
                        className="flex items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(goal.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, goal.id])
                                : field.onChange(field.value?.filter((value) => value !== goal.id));
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {goal.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default InterestForm;