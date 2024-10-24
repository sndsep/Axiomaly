"use client"

import { useState, useRef } from "react"
import { toast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

// Constantes de validación
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg']
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

interface UploadAvatarProps {
  currentAvatar?: string | null
  onUploadComplete: (url: string) => void
}

export function UploadAvatar({ currentAvatar, onUploadComplete }: UploadAvatarProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState(currentAvatar)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    console.log('Selected file:', file) // Debug log

    try {
      setIsUploading(true)
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      console.log('Upload response:', data) // Debug log

      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload image')
      }

      setPreviewUrl(data.url)
      onUploadComplete(data.url)
      
      toast({
        title: "Success",
        description: "Profile picture updated successfully",
      })
    } catch (error) {
      console.error('Upload error:', error)
      toast({
        title: "Error",
        description: error.message || "Failed to upload image",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-24 w-24">
        <AvatarImage src={previewUrl || ""} alt="Profile picture" />
        <AvatarFallback>
          <User className="h-12 w-12" />
        </AvatarFallback>
      </Avatar>
      
      <div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/jpeg,image/png,image/gif"
          className="hidden"
        />
        <Button
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
        >
          {isUploading ? "Uploading..." : "Change picture"}
        </Button>
      </div>
    </div>
  )
}
