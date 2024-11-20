'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/forms/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/forms/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/forms/radio-group';
import { Checkbox } from '@/components/ui/forms/checkbox';
import { Input } from '@/components/ui/forms/input';
import { Textarea } from '@/components/ui/forms/textarea';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const VFX_AREAS = [
  { id: '3d-modeling', label: '3D Modeling' },
  { id: 'character-animation', label: 'Character Animation' },
  { id: 'vfx-compositing', label: 'VFX Compositing' },
  { id: 'lighting-rendering', label: 'Lighting & Rendering' },
  { id: 'rigging', label: 'Character Rigging' },
  { id: 'fx-simulation', label: 'FX Simulation' },
  { id: 'matte-painting', label: 'Matte Painting' },
  { id: 'motion-capture', label: 'Motion Capture' },
] as const;

const INDUSTRIES = [
  { id: 'film', label: 'Film Industry' },
  { id: 'games', label: 'Games Industry' },
  { id: 'tv', label: 'Television' },
  { id: 'advertising', label: 'Advertising' },
  { id: 'arch-viz', label: 'Architectural Visualization' },
] as const;

const SOFTWARE = [
  { id: 'maya', label: 'Maya' },
  { id: 'houdini', label: 'Houdini' },
  { id: 'nuke', label: 'Nuke' },
  { id: 'blender', label: 'Blender' },
  { id: '3ds-max', label: '3ds Max' },
  { id: 'substance', label: 'Substance' },
] as const;

const formSchema = z.object({
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  interests: z.array(z.string()).min(1, 'Please select at least one interest'),
  weeklyHours: z.coerce.number().min(5).max(40),
  priorExperience: z.string().min(10).max(500),
  industryFocus: z.array(z.string()).min(1),
  softwareExperience: z.array(z.string()),
  preferredLearningStyle: z.enum(['visual', 'hands-on', 'theoretical', 'mixed'])
});

type FormSchema = z.infer<typeof formSchema>;

export function ComprehensiveSurveyForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      experienceLevel: 'beginner',
      interests: [],
      weeklyHours: 10,
      priorExperience: '',
      industryFocus: [],
      softwareExperience: [],
      preferredLearningStyle: 'mixed'
    }
  });

  React.useEffect(() => {
    const loadSurveyData = async () => {
      try {
        const response = await fetch('/api/onboarding/survey');
        if (!response.ok) {
          throw new Error('Failed to load survey data');
        }
        const data = await response.json();
        if (data?.responses) {
          form.reset(data.responses);
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        toast({
          title: "Error",
          description: "Failed to load existing survey data.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadSurveyData();
  }, [form, toast]);

  const onSubmit = async (data: FormSchema) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/onboarding/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      toast({
        title: "Survey completed",
        description: "Your preferences have been saved."
      });
      
      router.push('/onboarding/degree-program/curriculum');

    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast({
        title: "Error",
        description: "Failed to save survey. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Tell Us About Your VFX Journey</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Experience Level */}
          <FormField
            control={form.control}
            name="experienceLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience Level</FormLabel>
                <FormControl>
                  <RadioGroup 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    {['beginner', 'intermediate', 'advanced'].map((level) => (
                      <FormItem key={level} className="flex items-center space-x-2">
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

          {/* Prior Experience */}
          <FormField
            control={form.control}
            name="priorExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prior Experience</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your experience in VFX or related fields..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* VFX Areas */}
          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Areas of Interest</FormLabel>
                <div className="grid grid-cols-2 gap-4">
                  {VFX_AREAS.map((area) => (
                    <FormItem key={area.id} className="flex items-start space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={(field.value || []).includes(area.id)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...(field.value || []), area.id]
                              : (field.value || []).filter((id) => id !== area.id);
                            field.onChange(newValue);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {area.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Industry Focus */}
          <FormField
            control={form.control}
            name="industryFocus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry Focus</FormLabel>
                <div className="grid grid-cols-2 gap-4">
                  {INDUSTRIES.map((industry) => (
                    <FormItem key={industry.id} className="flex items-start space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={(field.value || []).includes(industry.id)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...(field.value || []), industry.id]
                              : (field.value || []).filter((id) => id !== industry.id);
                            field.onChange(newValue);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {industry.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Software Experience */}
          <FormField
            control={form.control}
            name="softwareExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Software Experience</FormLabel>
                <div className="grid grid-cols-2 gap-4">
                  {SOFTWARE.map((software) => (
                    <FormItem key={software.id} className="flex items-start space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={(field.value || []).includes(software.id)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...(field.value || []), software.id]
                              : (field.value || []).filter((id) => id !== software.id);
                            field.onChange(newValue);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {software.label}
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
                <FormLabel>Weekly Hours Available</FormLabel>
                <FormControl>
                  <Input 
                    type="number"
                    min={5}
                    max={40}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Learning Style */}
          <FormField
            control={form.control}
            name="preferredLearningStyle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Learning Style</FormLabel>
                <FormControl>
                  <RadioGroup 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                    className="grid grid-cols-2 gap-4"
                  >
                    {[
                      { value: 'visual', label: 'Visual Learning' },
                      { value: 'hands-on', label: 'Hands-on Practice' },
                      { value: 'theoretical', label: 'Theoretical Study' },
                      { value: 'mixed', label: 'Mixed Approach' },
                    ].map((style) => (
                      <FormItem key={style.value} className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value={style.value} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {style.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
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
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : 'Continue to Curriculum Plan'}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ComprehensiveSurveyForm;