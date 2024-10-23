// src/app/(auth)/register/page.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import * as z from "zod"
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

const registerSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres",
  }),
  email: z.string().email({
    message: "Debe ser un email válido",
  }),
  password: z.string().min(4, {
    message: "La contraseña debe tener al menos 4 caracteres",
  }),
})

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      setIsLoading(true)
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error)
      }

      toast({
        title: "Registro exitoso",
        description: "Tu cuenta ha sido creada correctamente",
      })
      
      router.push('/login')
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Error al registrar usuario",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Registro</CardTitle>
        <CardDescription>
          Crea una nueva cuenta para acceder a la plataforma
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} disabled={isLoading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Registrando..." : "Registrarse"}
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center">
          <Link href="/login" className="text-sm text-blue-600 hover:underline">
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
