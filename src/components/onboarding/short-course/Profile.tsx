// src/components/onboarding/short-course/Profile.tsx
// This component renders the profile setup page for short course students

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/forms/form';
import { Input } from '@/components/ui/forms/input';
import { Button } from '@/components/ui/forms/button';
import { Switch } from '@/components/ui/forms/switch';
import { Textarea } from '@/components/ui/forms/textarea';
import { useToast } from '@/components/ui/hooks/use-toast';
import { OnboardingLayout } from '../common/OnboardingLayout';
import { Loader2, Globe, User, Link2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/forms/select';

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  bio: z.string().optional(),
  timezone: z.string(),
  portfolio: z.string().url().optional().or(z.literal('')),
  linkedin: z.string().url().optional().or(z.literal('')),
  twitter: z.string().optional(),
  emailNotifications: z.boolean(),
  marketingEmails: z.boolean(),
  courseUpdates: z.boolean(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface ProfileProps {
  selectedCourse: string;
}

// Helper function to get timezone options
const getTimezoneOptions = () => {
  return Intl.supportedValuesOf('timeZone').map(tz => ({
    value: tz,
    label: tz.replace(/_/g, ' ')
  }));
};

export default function ShortCourseProfile({ selectedCourse }: ProfileProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
      bio: '',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      portfolio: '',
      linkedin: '',
      twitter: '',
      emailNotifications: true,
      marketingEmails: false,
      courseUpdates: true,
    },
  });

  const onSubmit = async (data: ProfileFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/onboarding/complete-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          selectedCourse,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save profile');
      }

      toast({
        title: "Profile completed!",
        description: "Welcome to VFX Academy. Let's start learning!",
      });

      router.push('/dashboard');
    } catch (error) {
      console.error('Error saving profile:', error);
      toast({
        title: "Error",
        description: "Failed to save your profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <OnboardingLayout
      currentStep={4}
      careerPath="SHORT_COURSE"
      title="Complete Your Profile"
      description="Set up your learning preferences and profile details"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Basic Information</h3>
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input {...field} className="pl-9" placeholder="John Doe" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormDescription>
                    Tell us a bit about yourself and your goals
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="I'm passionate about VFX and looking to..."
                      className="resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timezone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Timezone</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="pl-9">
                          <SelectValue placeholder="Select your timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          {getTimezoneOptions().map((tz) => (
                            <SelectItem key={tz.value} value={tz.value}>
                              {tz.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social Links</h3>
            
            <FormField
              control={form.control}
              name="portfolio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Portfolio URL</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Link2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input {...field} className="pl-9" placeholder="https://your-portfolio.com" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn Profile</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Link2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input {...field} className="pl-9" placeholder="https://linkedin.com/in/username" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="twitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Twitter Handle</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400">@</span>
                      <Input {...field} className="pl-8" placeholder="username" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Notification Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Notification Preferences</h3>

            <FormField
              control={form.control}
              name="emailNotifications"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Email Notifications</FormLabel>
                    <FormDescription>
                      Receive notifications about your course progress
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="courseUpdates"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Course Updates</FormLabel>
                    <FormDescription>
                      Get notified about new course content and updates
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="marketingEmails"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Marketing Emails</FormLabel>
                    <FormDescription>
                      Receive updates about new courses and special offers
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

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
              'Complete Profile & Start Learning'
            )}
          </Button>
        </form>
      </Form>
    </OnboardingLayout>
  );
}