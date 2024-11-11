// src/hooks/use-toast.ts
import { toast } from "sonner"

export function useToast() {
  return {
    toast: {
      success: (message: string, description?: string) =>
        toast.success(message, { description }),
      error: (message: string, description?: string) =>
        toast.error(message, { description }),
      info: (message: string, description?: string) => 
        toast(message, { description }),
    },
  }
}