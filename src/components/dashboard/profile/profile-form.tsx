"use client";

// src/components/dashboard/profile/profile-form.tsx
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/components/ui/hooks/use-toast";
import { Button } from "@/components/ui/forms/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/forms/form";
import { Input } from "@/components/ui/forms/input";
import { Textarea } from "@/components/ui/forms/textarea";
import { AvatarUploadButton } from "@/components/dashboard/profile/avatar-upload-button";
import { useRouter } from "next/navigation";

const urlSchema = z.string().url("Must be a valid URL").nullable().optional();

const profileFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().max(500).nullable().optional(),
  portfolioUrl: urlSchema.or(z.literal("")),
  linkedinUrl: urlSchema.or(z.literal("")),
  twitterUrl: urlSchema.or(z.literal("")),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface ProfileFormProps {
  user: {
    id: string;
    name: string | null;
    email: string | null;
    bio: string | null;
    image: string | null;
    preferences?: {
      portfolio: string | null;
      linkedin: string | null;
      twitter: string | null;
    };
  };
}

export function ProfileForm({ user }: ProfileFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user?.name || "",
      bio: user?.bio || "",
      portfolioUrl: user?.preferences?.portfolio || "",
      linkedinUrl: user?.preferences?.linkedin || "",
      twitterUrl: user?.preferences?.twitter || "",
    },
  });

  console.log("Current form values:", form.getValues());

  async function onSubmit(data: ProfileFormValues) {
    setIsLoading(true);
    try {
      console.log("Submitting form data:", data);

      const response = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          bio: data.bio,
          portfolioUrl: data.portfolioUrl || null,
          linkedinUrl: data.linkedinUrl || null,
          twitterUrl: data.twitterUrl || null,
        }),
      });

      const responseData = await response.json();
      console.log("Server response:", responseData);

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to update profile");
      }

      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
      
      router.refresh();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="relative">
        <AvatarUploadButton 
          user={user}
          onUploadComplete={(imageUrl) => {
            console.log("Avatar updated:", imageUrl);
            router.refresh();
          }}
        />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} value={field.value || ''} />
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
                <FormLabel>Bio (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    {...field}
                    value={field.value || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="portfolioUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Portfolio URL (optional)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="https://your-portfolio.com"
                    {...field}
                    value={field.value || ''} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="linkedinUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn URL (optional)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="https://linkedin.com/in/username"
                    {...field}
                    value={field.value || ''} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="twitterUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter URL (optional)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="https://twitter.com/username"
                    {...field}
                    value={field.value || ''} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update profile"}
          </Button>
        </form>
      </Form>
    </div>
  );
}