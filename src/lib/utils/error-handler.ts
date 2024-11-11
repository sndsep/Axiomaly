import { toast } from "@/components/ui/hooks/use-toast"

interface ErrorOptions {
  title?: string
  context?: string
  fallbackMessage?: string
}

export function handleError(error: unknown, options: ErrorOptions = {}) {
  const {
    title = "Error",
    context = "Operation",
    fallbackMessage = "An unexpected error occurred"
  } = options

  const errorMessage = error instanceof Error 
    ? error.message 
    : fallbackMessage

  console.error(`${context} error:`, error)

  toast({
    variant: "destructive",
    title,
    description: errorMessage
  })

  return {
    error: true,
    message: errorMessage
  }
}
