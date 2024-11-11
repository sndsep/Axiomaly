"use client"

// src/components/dashboard/profile/avatar-upload-button.tsx
import { useState } from "react"
import { Camera } from "lucide-react"
import { UserAvatar } from "@/components/ui/avatar/user-avatar"
import { useToast } from "@/components/ui/hooks/use-toast"
import { useRouter } from "next/navigation"

interface AvatarUploadButtonProps {
  user: any
  onUploadComplete?: (imageUrl: string) => void
}

export function AvatarUploadButton({ user, onUploadComplete }: AvatarUploadButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append('avatar', file)

    setIsLoading(true)
    try {
      const response = await fetch('/api/user/avatar', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Failed to upload avatar')

      const data = await response.json()
      
      if (onUploadComplete) {
        onUploadComplete(data.image)
      }

      toast({
        title: "Success",
        description: "Your avatar has been updated",
      })
      
      router.refresh()
      
    } catch (error) {
      console.error("Upload error:", error)
      toast({
        title: "Error",
        description: "Failed to upload avatar. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative inline-block">
      <div className="group cursor-pointer rounded-full overflow-hidden">
        <UserAvatar 
          user={user} 
          size="xl"
          loading={isLoading}
        />
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => document.getElementById('avatar-input')?.click()}
        >
          <Camera className="h-8 w-8 text-white" />
        </div>
      </div>
      <input
        id="avatar-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        disabled={isLoading}
      />
    </div>
  )
}