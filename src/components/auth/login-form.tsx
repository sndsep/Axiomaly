// src/components/auth/login-form.tsx

'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/forms/button"
import { Input } from "@/components/ui/forms/input"
import { Label } from "@/components/ui/forms/label"
import { Icons } from "@/components/ui/icons/icons"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/hooks/use-toast"

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(event.currentTarget as HTMLFormElement)
      const email = formData.get('email') as string
      const password = formData.get('password') as string

      console.log('Attempting login with:', email) // For development debugging

      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/dashboard'
      })

      if (result?.error) {
        console.error('Login error:', result.error) // For development debugging
        toast({
          title: "Error",
          description: "Invalid credentials",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Success",
          description: "Login successful!",
        })
        router.push(result?.url || '/dashboard')
        router.refresh()
      }
    } catch (error) {
      console.error('Login error:', error) // For development debugging
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="student@test.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Label htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter any password in dev mode"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="text-sm text-center text-muted-foreground">
        For development, use:<br />
        Email: student@test.com<br />
        Password: (any password)
      </div>
    </div>
  )
}