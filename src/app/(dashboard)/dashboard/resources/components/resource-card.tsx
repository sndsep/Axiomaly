'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Video, Image } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

const ICON_MAP = {
  'document': FileText,
  'video': Video,
  'image': Image,
}

interface ResourceCardProps {
  resource: any // Tipado completo pendiente
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const Icon = ICON_MAP[resource.type as keyof typeof ICON_MAP] || FileText

  async function handleDownload() {
    setIsDownloading(true)
    try {
      const response = await fetch('/api/resources/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resourceId: resource.id })
      })

      if (!response.ok) throw new Error('Download failed')

      const data = await response.json()
      // Aquí iniciarías la descarga real
      window.open(data.downloadUrl, '_blank')

      toast({
        title: "Download started",
        description: "Your download will begin shortly."
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to start download",
        variant: "destructive"
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Icon className="h-8 w-8" />
          <div>
            <CardTitle>{resource.title}</CardTitle>
            <CardDescription>{resource.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{resource.type}</span>
            <span className="text-muted-foreground">{resource.size}</span>
          </div>
          <Button 
            className="w-full"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            <Download className="mr-2 h-4 w-4" />
            {isDownloading ? 'Starting Download...' : 'Download'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}