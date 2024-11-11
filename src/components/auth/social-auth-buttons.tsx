// components/auth/social-auth-buttons.tsx
import { Button } from "@/components/ui/button"
import { Github, Google } from "lucide-react"

export const SocialAuthButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button variant="outline" className="w-full">
        <Google className="mr-2 h-4 w-4" />
        Google
      </Button>
      <Button variant="outline" className="w-full">
        <Github className="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </div>
  )
}