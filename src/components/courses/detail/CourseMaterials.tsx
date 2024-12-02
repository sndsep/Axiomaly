// src/components/courses/detail/CourseMaterials.tsx
import React from 'react'
import { useCourseMaterials } from '@/hooks/use-course-materials'
import { FileIcon, Download, Folder, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Material {
  id: string
  title: string
  type: 'document' | 'video' | 'resource'
  url: string
  size?: number
  createdAt: Date
  moduleId?: string
  lessonId?: string
}

export const CourseMaterials = ({ courseId }: { courseId: string }) => {
  const { materials, isLoading, error, downloadMaterial } = useCourseMaterials(courseId)

  if (isLoading) return <div>Loading materials...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="space-y-4">
      {materials.map(material => (
        <Card key={material.id}>
          <CardContent className="p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FileIcon className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-medium">{material.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {material.type} • {formatBytes(material.size)}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => window.open(material.url)}>
                <Eye className="w-4 h-4 mr-2" />
                View
              </Button>
              <Button variant="outline" size="sm" onClick={() => downloadMaterial(material.id)}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

