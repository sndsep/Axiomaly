"use client"

import { useState, useRef } from "react"
import { toast } from "@/components/ui/hooks/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar/avatar"
import { Button } from "@/components/ui/forms/button"
import { User } from "lucide-react"

// Validation constants
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg']
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

interface UploadAvatarProps {
  currentAvatar?: string | null
  onUploadComplete: (url: string) => void
}

export function UploadAvatar({ currentAvatar, onUploadComplete }: UploadAvatarProps) {
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a JPEG, PNG or GIF image.",
        variant: "destructive",
      })
      return
    }

    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB.",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      onUploadComplete(data.url)
      toast({
        title: "Avatar updated",
        description: "Your profile picture has been updated successfully.",
      })
    } catch (error) {
      console.error('Upload error:', error)
      toast({
        title: "Upload failed",
        description: "There was an error uploading your image. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <Avatar className="h-24 w-24">
        <AvatarImage src={currentAvatar || undefined} alt="Profile picture" />
        <AvatarFallback>
          <User className="h-12 w-12" />
        </AvatarFallback>
      </Avatar>
      <Button
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
      >
        {isUploading ? 'Uploading...' : 'Change Avatar'}
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={ALLOWED_MIME_TYPES.join(',')}
        className="hidden"
      />
    </div>
  )
}
