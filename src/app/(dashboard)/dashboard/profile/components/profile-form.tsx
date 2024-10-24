'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { UploadAvatar } from "@/components/ui/upload-avatar"

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  bio: z.string().max(500, {
    message: "Bio cannot exceed 500 characters",
  }).optional(),
  // Modificamos la validación del avatar para aceptar rutas locales
  avatar: z.string()
    .refine((value) => {
      // Acepta URLs y rutas locales que empiecen con /uploads/
      return value.startsWith('/uploads/') || value.startsWith('http');
    }, {
      message: "Invalid avatar path",
    })
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function ProfileForm() {
  const { data: session, update } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: session?.user?.name || "",
      bio: session?.user?.bio || "",
      avatar: session?.user?.avatar || "",
    },
  })

  async function onSubmit(data: ProfileFormValues) {
    setIsLoading(true)
    try {
      const response = await fetch("/api/profile/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to update profile')
      }

      // Update the session with the new user data
      await update({
        ...session,
        user: {
          ...session?.user,
          name: data.name,
          bio: data.bio,
          avatar: data.avatar,
        },
      })

      toast({
        title: "Success",
        description: "Profile updated successfully",
      })

      // Force a hard refresh of the page
      window.location.reload()
    } catch (error) {
      console.error('Profile update error:', error)
      toast({
        title: "Error",
        description: error.message || "Failed to update profile",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleAvatarUpload = async (url: string) => {
    form.setValue("avatar", url)
    
    // Get current form values
    const currentValues = form.getValues()
    
    // Submit the form with current values and new avatar
    await onSubmit({
      name: currentValues.name || session?.user?.name || "",
      bio: currentValues.bio || session?.user?.bio || "",
      avatar: url,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          Update your personal details and profile picture
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <UploadAvatar
              currentAvatar={form.watch("avatar")}
              onUploadComplete={handleAvatarUpload}
            />
            
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
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
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about yourself..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save changes"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
