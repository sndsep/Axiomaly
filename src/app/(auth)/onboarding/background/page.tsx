"use client"

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/forms/form';
import { Textarea } from '@/components/ui/forms/textarea';
import { useToast } from '@/components/ui/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Checkbox } from '@/components/ui/forms/checkbox';

const formSchema = z.object({
  priorExperience: z.string().min(1, "Please describe your experience"),
  softwareExperience: z.array(z.string()).min(1, "Please select at least one software"),
  additionalInfo: z.string().optional()
});

const softwareOptions = [
  { id: 'maya', label: 'Maya' },
  { id: '3ds-max', label: '3ds Max' },
  { id: 'blender', label: 'Blender' },
  { id: 'houdini', label: 'Houdini' },
  { id: 'nuke', label: 'Nuke' },
  { id: 'substance', label: 'Substance' },
  { id: 'photoshop', label: 'Photoshop' },
  { id: 'zbrush', label: 'ZBrush' }
];

export default function BackgroundPage() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      priorExperience: '',
      softwareExperience: [],
      additionalInfo: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/onboarding/background', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      if (!response.ok) throw new Error('Failed to save background information');

      toast({
        title: "Progress Saved",
        description: "Moving to the next step..."
      });

      // Navigate to the next step (MENTORSHIP according to your enum)
      router.push('/onboarding/mentorship');

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your information. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Tell Us About Your Background</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

              <FormField
                control={form.control}
                name="softwareExperience"
                render={() => (
                  <FormItem>
                    <FormLabel>Software Experience</FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {softwareOptions.map((option) => (
                        <FormField
                          key={option.id}
                          control={form.control}
                          name="softwareExperience"
                          render={({ field }) => (
                            <FormItem
                              key={option.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, option.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== option.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option.label}
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

              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any other relevant information you'd like to share..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                >
                  Back
                </Button>
                <Button type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}