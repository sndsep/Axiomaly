"use client"

import { useState, useRef } from "react"
import { toast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

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

    try {
      setIsUploading(true)
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Error al subir la imagen')

      const data = await response.json()
      setPreviewUrl(data.url)
      onUploadComplete(data.url)
      
      toast({
        title: "Avatar actualizado",
        description: "Tu foto de perfil ha sido actualizada correctamente.",
      })
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: "Error",
        description: "No se pudo subir la imagen",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-24 w-24">
        <AvatarImage src={previewUrl || ""} alt="Avatar" />
        <AvatarFallback>
          <User className="h-12 w-12" />
        </AvatarFallback>
      </Avatar>
      
      <div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        <Button
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
        >
          {isUploading ? "Subiendo..." : "Subir Avatar"}
        </Button>
      </div>
    </div>
  )
}
