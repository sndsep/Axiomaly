// File: src/components/dashboard/profile/avatar-upload.tsx
// Component for handling avatar uploads

"use client"

import { useState, useRef } from "react"
import { Camera, Loader2 } from "lucide-react"
import { UserAvatar } from "@/components/ui/avatar/user-avatar"
import { Button } from "@/components/ui/forms/button"
import { toast } from "@/components/ui/hooks/use-toast"
import { signOut, signIn } from "next-auth/react"

interface AvatarUploadProps {
  user: any
  onUploadComplete?: (imageUrl: string) => void
}

export function AvatarUpload({ user, onUploadComplete }: AvatarUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    const formData = new FormData()
    formData.append("avatar", file)

    try {
      const response = await fetch("/api/user/avatar", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText)
      }

      const data = await response.json()
      
      // Forzar actualización de sesión
      await signOut({ redirect: false });
      await signIn('credentials', {
        email: user.email,
        redirect: false
      });
      
      onUploadComplete?.(data.user.image)
      
      toast({
        title: "Success",
        description: "Your profile picture has been updated.",
      })

      // Recargar la página después de un breve delay
      setTimeout(() => {
        window.location.reload()
      }, 500)

    } catch (error) {
      console.error("Upload error:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to update profile picture. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleRemoveAvatar = async () => {
    setIsUploading(true)
    try {
      const response = await fetch("/api/user/avatar", {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Failed to remove avatar")

      // Actualizar la sesión para quitar la imagen
      await update({
        ...session,
        user: {
          ...session?.user,
          image: null
        }
      })

      // Forzar un refresh de la página para actualizar la sesión
      window.location.reload()

      onUploadComplete?.("")
      
      toast({
        title: "Avatar removed",
        description: "Your profile picture has been removed.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove avatar. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleUploadClick = () => {
    inputRef.current?.click()
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />
      
      <UserAvatar
        user={user}
        size="xl"
        className="relative h-20 w-20 cursor-pointer"
        onClick={handleUploadClick}
      >
        {!isUploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:opacity-100 rounded-full">
            <Camera className="h-6 w-6 text-white" />
          </div>
        )}
        {isUploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
            <Loader2 className="h-6 w-6 text-white animate-spin" />
          </div>
        )}
      </UserAvatar>

      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleUploadClick}
          disabled={isUploading}
        >
          Change
        </Button>
        {user.image && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleRemoveAvatar}
            disabled={isUploading}
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  )
}