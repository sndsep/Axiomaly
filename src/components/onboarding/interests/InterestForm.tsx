// src/components/onboarding/InterestForm.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Card } from '@/components/ui/forms/card';
import { Button } from '@/components/ui/forms/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/forms/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/forms/radio-group';
import { Checkbox } from '@/components/ui/forms/checkbox';
import { Input } from '@/components/ui/forms/input';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/hooks/use-toast';

const formSchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1, 'Please select at least one area of interest'),
  weeklyHours: z.coerce.number().min(1).max(40),
  goals: z.array(z.string()).min(1, 'Please select at least one goal'),
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
        title: "Success",
        description: "Your preferences have been saved successfully.",
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
      <Card className="p-6">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">Let's Personalize Your Learning Journey</h1>
            <p className="text-gray-500">Tell us about your interests and goals</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="experienceLevel"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>What's your experience level with VFX?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
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

              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Which areas interest you the most?</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {vfxAreas.map((area) => (
                        <FormItem
                          key={area.id}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(area.id)}
                              onCheckedChange={(checked) => {
                                const updatedValue = checked
                                  ? [...field.value, area.id]
                                  : field.value?.filter((value) => value !== area.id);
                                field.onChange(updatedValue);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{area.label}</FormLabel>
                        </FormItem>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your main goals?</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {careerGoals.map((goal) => (
                        <FormItem
                          key={goal.id}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(goal.id)}
                              onCheckedChange={(checked) => {
                                const updatedValue = checked
                                  ? [...field.value, goal.id]
                                  : field.value?.filter((value) => value !== goal.id);
                                field.onChange(updatedValue);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{goal.label}</FormLabel>
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
        </div>
      </Card>
    </div>
  );
}

export default InterestForm;