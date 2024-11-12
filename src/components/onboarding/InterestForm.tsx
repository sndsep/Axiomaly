// src/components/onboarding/InterestForm.tsx
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
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced'], {
    required_error: "Please select your experience level"
  }),
  interests: z.array(z.string()).min(1, {
    message: "Please select at least one area of interest"
  }),
  weeklyHours: z.coerce.number().min(1, {
    message: "Minimum 1 hour required"
  }).max(40, {
    message: "Maximum 40 hours allowed"
  }),
  goals: z.array(z.string()).min(1, {
    message: "Please select at least one goal"
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const vfxAreas = [
  { id: '3d-modeling', label: '3D Modeling' },
  { id: 'texturing', label: 'Texturing' },
  { id: 'animation', label: 'Animation' },
  { id: 'vfx-compositing', label: 'VFX Compositing' },
  { id: 'lighting', label: 'Lighting & Rendering' },
] as const;

const careerGoals = [
  { id: 'job-ready', label: 'Get Job-Ready Skills' },
  { id: 'portfolio', label: 'Build a Professional Portfolio' },
  { id: 'career-change', label: 'Change Career to VFX' },
  { id: 'skill-upgrade', label: 'Upgrade Current Skills' },
  { id: 'specific-project', label: 'Complete a Specific Project' },
] as const;

export function InterestForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      experienceLevel: 'beginner',
      interests: [],
      weeklyHours: 10,
      goals: [],
    },
  });

  const watchedInterests = form.watch('interests'); // This should be defined at the top of your InterestForm component
   const watchedGoals = form.watch('goals');

  async function onSubmit(values: FormSchema) {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
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

      router.push('/onboarding/course-recommendations');
    } catch (error) {
      console.error('Error saving preferences:', error);
      toast({
        title: "Error",
        description: "Failed to save your preferences. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Let's Personalize Your Learning Journey
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Experience Level */}
              <FormField
                control={form.control}
                name="experienceLevel"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>What's your experience level with VFX?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="grid grid-cols-3 gap-4"
                      >
                        {[
                          { value: 'beginner', label: 'Beginner' },
                          { value: 'intermediate', label: 'Intermediate' },
                          { value: 'advanced', label: 'Advanced' }
                        ].map((option) => (
                          <FormItem key={option.value} className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value={option.value} id={option.value} />
                            </FormControl>
                            <FormLabel
                              htmlFor={option.value}
                              className="font-normal cursor-pointer"
                            >
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

              {/* Areas of Interest */}
              <FormField
                control={form.control}
                name="interests"
                render={() => (
                  <FormItem>
                    <FormLabel>Which areas interest you the most?</FormLabel>
                    <div className="grid grid-cols-2 gap-4">
                      {vfxAreas.map((area) => (
                        <FormItem
                          key={area.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={watchedInterests.includes(area.id)}
                              onChange={(e) => {
                                const checked = e.target.checked;
                                if (checked) {
                                  form.setValue('interests', [...watchedInterests, area.id]);
                                } else {
                                  form.setValue('interests', watchedInterests.filter((id) => id !== area.id));
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {area.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </div>
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
                    <FormLabel>How many hours can you dedicate weekly?</FormLabel>
                    <FormControl>
                      <Input 
                        type="number"
                        min={1}
                        max={40}
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Career Goals */}
              <FormField
                control={form.control}
                name="goals"
                render={() => (
                  <FormItem>
                    <FormLabel>What are your main goals?</FormLabel>
                    <div className="grid grid-cols-2 gap-4">
                      {careerGoals.map((goal) => (
                        <FormItem
                          key={goal.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={watchedGoals.includes(goal.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  form.setValue('goals', [...watchedGoals, goal.id]);
                                } else {
                                  form.setValue(
                                    'goals',
                                    watchedGoals.filter((id) => id !== goal.id)
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">
                            {goal.label}
                          </FormLabel>
                        </FormItem>
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
        </CardContent>
      </Card>
    </div>
  );
}

export default InterestForm;