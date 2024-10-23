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
      avatar: session?.user?.avatar || "", // Cambiado de image a avatar
    },
  })

  async function onSubmit(data: ProfileFormValues) {
    setIsLoading(true)
    try {
      console.log('Enviando datos:', data) // Para debugging

      const response = await fetch("/api/profile/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()
      console.log('Respuesta:', responseData) // Para debugging

      if (!response.ok) throw new Error(responseData.message || "Failed to update profile")

      // Actualiza la sesión con los nuevos datos
      await update({
        ...session,
        user: {
          ...session?.user,
          name: data.name,
          avatar: data.avatar, // Cambiado de image a avatar
          bio: data.bio,
        },
      })

      router.refresh()
      
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
    } catch (error) {
      console.error('Error updating profile:', error) // Para debugging
      toast({
        title: "Error",
        description: error.message || "Failed to update profile",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Actualizar el formulario cuando se sube una nueva imagen
  const handleAvatarUpload = (url: string) => {
    form.setValue("avatar", url)
    // Actualizar la vista previa inmediatamente
    update({
      ...session,
      user: {
        ...session?.user,
        avatar: url, // Cambiado de image a avatar
      },
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          Update your profile information
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
