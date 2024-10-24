// src/app/(auth)/register/page.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const registerSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  correo: z.string().email("Correo electrónico inválido"),
  contraseña: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
})

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nombre: "",
      correo: "",
      contraseña: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error)
      }

      toast({
        title: "Registration successful",
        description: "Your account has been created successfully",
      })
      
      router.push('/login')
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Error registering user",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Create a new account to access the platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage>{errors.nombre?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="correo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input type="email" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage>{errors.correo?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={register}
            name="contraseña"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage>{errors.contraseña?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/login" className="text-sm text-blue-600 hover:underline">
            Already have an account? Log in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export const registerSchema = z.object({
  // Definición del esquema
})
