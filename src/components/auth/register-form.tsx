// src/components/auth/register-form.tsx

'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/forms/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/forms/form'
import { Input } from '@/components/ui/forms/input'
import { useToast } from '@/components/ui/hooks/use-toast'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type FormData = z.infer<typeof formSchema>

export function RegisterForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: FormData) {
    try {
      setIsLoading(true)

      // First register the user
      const registerResponse = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!registerResponse.ok) {
        const error = await registerResponse.json()
        throw new Error(error.error || 'Registration failed')
      }

      // Then sign in
      const signInResult = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      console.log("Sign in result:", signInResult)

      if (signInResult?.error) {
        throw new Error('Failed to sign in after registration')
      }

      toast({
        title: 'Success',
        description: 'Account created successfully!'
      })

      // Wait a moment before redirecting
      await new Promise(resolve => setTimeout(resolve, 500))
      
      router.push('/onboarding/career-path')
      router.refresh()

    } catch (error) {
      console.error('Registration error:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to create account',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    {...field}
                    disabled={isLoading}
                  />
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
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    {...field}
                    disabled={isLoading}
                  />
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Create a password"
                    type="password"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating account...
              </>
            ) : (
              'Create Account'
            )}
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link 
          href="/login" 
          className="underline underline-offset-4 hover:text-primary"
        >
          Sign in
        </Link>
      </div>
    </div>
  )
}