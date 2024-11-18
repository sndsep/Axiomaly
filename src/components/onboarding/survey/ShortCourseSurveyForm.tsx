// src/components/onboarding/survey/ShortCourseSurveyForm.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/forms/button';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/forms/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/forms/radio-group';
import { Checkbox } from '@/components/ui/forms/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  availability: z.array(z.string()).min(1, 'Select at least one availability option'),
});

type FormData = z.infer<typeof formSchema>;

const availabilityOptions = [
  { id: 'weekday-morning', label: 'Weekday Mornings' },
  { id: 'weekday-evening', label: 'Weekday Evenings' },
  { id: 'weekend', label: 'Weekends' },
  { id: 'flexible', label: 'Flexible Schedule' },
] as const;

export function ShortCourseSurveyForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      experienceLevel: 'beginner',
      availability: [],
    },
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/user/onboarding/short-course-survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to save survey');
      }

      toast({
        title: "Success",
        description: "Your preferences have been saved.",
      });

      router.push('/onboarding/short-course/recommendations');
    } catch (error) {
      console.error('Survey submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to save your preferences. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Quick Survey</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="experienceLevel"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Your VFX Experience Level</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-col space-y-2"
                    >
                      {['beginner', 'intermediate', 'advanced'].map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <RadioGroupItem 
                            value={level} 
                            id={`experience-${level}`}
                          />
                          <FormLabel 
                            htmlFor={`experience-${level}`}
                            className="cursor-pointer capitalize"
                          >
                            {level}
                          </FormLabel>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>When can you attend live sessions?</FormLabel>
                  <div className="grid grid-cols-2 gap-4">
                    {availabilityOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          checked={field.value?.includes(option.id)}
                          onCheckedChange={(checked) => {
                            const updatedValue = checked
                              ? [...(field.value || []), option.id]
                              : field.value?.filter((value) => value !== option.id) || [];
                            field.onChange(updatedValue);
                          }}
                        />
                        <FormLabel 
                          htmlFor={option.id}
                          className="cursor-pointer"
                        >
                          {option.label}
                        </FormLabel>
                      </div>
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
  );
}