// src/components/courses/learning/FileSubmissionSystem.tsx
'use client'

import React from 'react'
import { Upload, X, FileText, Loader2 } from 'lucide-react'
import { useToast } from '@/components/ui/hooks/use-toast'
import { Progress } from '@/components/ui/forms/progress'
import { Button } from '@/components/ui/forms/button'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/forms/card'

interface FileSubmissionProps {
  assignmentId: string
  courseId: string
  maxFileSize?: number // in MB
  allowedTypes?: string[]
  onUploadComplete?: (fileUrl: string) => void
}

interface FileState {
  file: File
  progress: number
  status: 'pending' | 'uploading' | 'complete' | 'error'
}

export function FileSubmissionSystem({ 
  assignmentId, 
  courseId,
  maxFileSize = 100,
  allowedTypes = ['.pdf', '.zip', '.blend', '.mp4'],
  onUploadComplete 
}: FileSubmissionProps) {
  const [files, setFiles] = React.useState<FileState[]>([])
  const [isDragging, setIsDragging] = React.useState(false)
  const { toast } = useToast()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const validateFile = (file: File): string | null => {
    if (file.size > maxFileSize * 1024 * 1024) {
      return `File size must be less than ${maxFileSize}MB`
    }

    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
    if (!allowedTypes.includes(fileExtension)) {
      return `File type not allowed. Allowed types: ${allowedTypes.join(', ')}`
    }

    return null
  }

  const uploadFile = async (fileState: FileState) => {
    try {
      // Create a FormData instance
      const formData = new FormData()
      formData.append('file', fileState.file)
      formData.append('assignmentId', assignmentId)
      formData.append('courseId', courseId)

      const response = await fetch('/api/assignments/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      onUploadComplete?.(data.fileUrl)

      toast({
        title: "Success",
        description: "File uploaded successfully",
      })

      return data.fileUrl
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload file",
        variant: "destructive",
      })
      throw error
    }
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    
    for (const file of droppedFiles) {
      const error = validateFile(file)
      if (error) {
        toast({
          title: "Invalid file",
          description: error,
          variant: "destructive",
        })
        continue
      }

      setFiles(prev => [...prev, {
        file,
        progress: 0,
        status: 'pending'
      }])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return

    const selectedFiles = Array.from(e.target.files)
    
    for (const file of selectedFiles) {
      const error = validateFile(file)
      if (error) {
        toast({
          title: "Invalid file",
          description: error,
          variant: "destructive",
        })
        continue
      }

      setFiles(prev => [...prev, {
        file,
        progress: 0,
        status: 'pending'
      }])
    }
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const submitFiles = async () => {
    for (let i = 0; i < files.length; i++) {
      if (files[i].status !== 'pending') continue

      setFiles(prev => prev.map((f, idx) => 
        idx === i ? { ...f, status: 'uploading' } : f
      ))

      try {
        await uploadFile(files[i])
        setFiles(prev => prev.map((f, idx) => 
          idx === i ? { ...f, status: 'complete', progress: 100 } : f
        ))
      } catch {
        setFiles(prev => prev.map((f, idx) => 
          idx === i ? { ...f, status: 'error' } : f
        ))
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Assignment</CardTitle>
        <CardDescription>
          Upload your files for review. Allowed types: {allowedTypes.join(', ')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div 
          className={`
            border-2 border-dashed rounded-lg p-8 text-center
            ${isDragging ? 'border-primary bg-primary/10' : 'border-gray-300'}
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            multiple
            className="hidden"
            id="file-upload"
            onChange={handleFileSelect}
            accept={allowedTypes.join(',')}
          />
          
          <div className="flex flex-col items-center gap-2">
            <Upload className="h-10 w-10 text-gray-400" />
            <p className="text-sm text-gray-600">
              Drag and drop your files here, or{' '}
              <label 
                htmlFor="file-upload" 
                className="text-primary hover:text-primary/80 cursor-pointer"
              >
                browse
              </label>
            </p>
            <p className="text-xs text-gray-500">
              Maximum file size: {maxFileSize}MB
            </p>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-6 space-y-4">
            {files.map((fileState, index) => (
              <div 
                key={fileState.file.name + index}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <FileText className="h-8 w-8 text-gray-400" />
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {fileState.file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(fileState.file.size / (1024 * 1024)).toFixed(2)}MB
                  </p>
                  {fileState.status === 'uploading' && (
                    <Progress value={fileState.progress} className="mt-2" />
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {fileState.status === 'uploading' && (
                    <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
                  )}
                  {fileState.status === 'complete' && (
                    <div className="h-5 w-5 rounded-full bg-green-500" />
                  )}
                  {fileState.status === 'error' && (
                    <div className="h-5 w-5 rounded-full bg-red-500" />
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    disabled={fileState.status === 'uploading'}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}

            <Button 
              className="w-full mt-4" 
              onClick={submitFiles}
              disabled={files.every(f => f.status === 'complete')}
            >
              Upload Files
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}