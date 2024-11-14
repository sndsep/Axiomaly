'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Card, CardContent, CardHeader } from '@/components/ui/forms/card';
import { Button } from '@/components/ui/forms/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/forms/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/forms/radio-group';
import { Checkbox } from '@/components/ui/forms/checkbox';
import { Input } from '@/components/ui/forms/input';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';

const formSchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1, 'Please select at least one area of interest'),
  weeklyHours: z.number().min(5).max(40),
  goals: z.array(z.string()).min(1, 'Please select at least one goal'),
});

type FormSchema = z.infer<typeof formSchema>;

const vfxAreas = [
  { id: '3d-modeling', label: '3D Modeling' },
  { id: 'character-animation', label: 'Character Animation' },
  { id: 'vfx-compositing', label: 'VFX Compositing' },
  { id: 'texturing-materials', label: 'Texturing & Materials' },
  { id: 'lighting-rendering', label: 'Lighting & Rendering' },
  { id: 'fx-simulation', label: 'FX & Simulation' },
] as const;

const learningGoals = [
  { id: 'career-change', label: 'Career Change into VFX' },
  { id: 'personal-projects', label: 'Personal Projects / Hobby' },
  { id: 'improve-skills', label: 'Improve Current Skills' },
  { id: 'professional-cert', label: 'Professional Certification' },
  { id: 'build-portfolio', label: 'Build Portfolio' },
  { id: 'industry-ready', label: 'Become Industry Ready' },
] as const;

const weeklyTimeOptions = [
  { value: 5, label: '5h' },
  { value: 10, label: '10h' },
  { value: 20, label: '20h' },
  { value: 30, label: '30h' },
  { value: 40, label: '40h' },
];

export function InterestForm() {
  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();
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

  async function onSubmit(values: FormSchema) {
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

  const pathTitle = session?.user?.careerPath === 'SHORT_COURSE' 
    ? 'Short Course'
    : 'Degree Program';

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Your {pathTitle} Journey</h1>
        <p className="text-gray-600">Tell us about your interests and goals</p>
      </div>

      <Card>
        <CardHeader className="text-2xl font-bold pb-2">
          Tell us about your interests
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
                    <FormLabel>What's your current skill level?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-3 gap-4"
                      >
                        {['beginner', 'intermediate', 'advanced'].map((level) => (
                          <FormItem key={level} className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value={level} />
                            </FormControl>
                            <FormLabel className="font-normal capitalize">
                              {level}
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
                        <FormField
                          key={area.id}
                          control={form.control}
                          name="interests"
                          render={({ field }) => (
                            <FormItem
                              key={area.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(area.id)}
                                  onCheckedChange={(checked) => {
                                    const newValue = checked
                                      ? [...field.value, area.id]
                                      : field.value?.filter((value) => value !== area.id);
                                    field.onChange(newValue);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {area.label}
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

              {/* Weekly Hours */}
              <FormField
                control={form.control}
                name="weeklyHours"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Weekly time commitment (hours)</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => field.onChange(parseInt(value, 10))}
                        defaultValue={field.value.toString()}
                        className="grid grid-cols-5 gap-4"
                      >
                        {weeklyTimeOptions.map((option) => (
                          <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
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
                name="goals"
                render={() => (
                  <FormItem>
                    <FormLabel>What are your learning goals?</FormLabel>
                    <div className="grid grid-cols-2 gap-4">
                      {learningGoals.map((goal) => (
                        <FormField
                          key={goal.id}
                          control={form.control}
                          name="goals"
                          render={({ field }) => (
                            <FormItem
                              key={goal.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(goal.id)}
                                  onCheckedChange={(checked) => {
                                    const newValue = checked
                                      ? [...field.value, goal.id]
                                      : field.value?.filter((value) => value !== goal.id);
                                    field.onChange(newValue);
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
        </CardContent>
      </Card>
    </div>
  );
}

export default InterestForm;