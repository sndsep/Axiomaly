// src/components/courses/assignments/AssignmentSubmissionForm.tsx
'use client'

import React from 'react'
import { useFileUpload } from '@/hooks/use-file-upload'
import { FileUploadProgress } from '@/components/shared/file-upload/FileUploadProgress'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/forms/card'
import { Button } from '@/components/ui/forms/button'
import { Textarea } from '@/components/ui/forms/textarea'
import { useToast } from '@/components/ui/hooks/use-toast'
import { UploadCloud, Loader2 } from 'lucide-react'

interface AssignmentSubmissionFormProps {
  courseId: string
  assignmentId: string
  dueDate?: Date
  maxFiles?: number
  allowedFileTypes?: string[]
  maxFileSize?: number // in MB
  onSubmissionComplete?: () => void
}

interface FileWithProgress {
  file: File
  id: string
  status: 'pending' | 'uploading' | 'complete' | 'error'
  progress: number
  error?: string
}

export function AssignmentSubmissionForm({
  courseId,
  assignmentId,
  dueDate,
  maxFiles = 5,
  allowedFileTypes = ['.pdf', '.zip', '.doc', '.docx', '.mp4'],
  maxFileSize = 100,
  onSubmissionComplete
}: AssignmentSubmissionFormProps) {
  const [files, setFiles] = React.useState<FileWithProgress[]>([])
  const [comments, setComments] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const { uploadFile, reset: resetUpload } = useFileUpload({
    endpoint: '/api/assignments/upload',
    maxSize: maxFileSize,
    allowedTypes: allowedFileTypes,
    onSuccess: (response) => {
      toast({
        title: "File uploaded successfully",
        description: "Your file has been uploaded and is ready for submission."
      })
    },
    onError: (error) => {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive"
      })
    }
  })

  const handleFileSelect = async (selectedFiles: FileList) => {
    if (files.length + selectedFiles.length > maxFiles) {
      toast({
        title: "Too many files",
        description: `You can only upload up to ${maxFiles} files`,
        variant: "destructive"
      })
      return
    }

    const newFiles = Array.from(selectedFiles).map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending' as const,
      progress: 0
    }))

    setFiles(prev => [...prev, ...newFiles])
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    handleFileSelect(e.dataTransfer.files)
  }

  const handleSubmission = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one file to upload",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Upload all files
      for (const fileData of files) {
        if (fileData.status !== 'complete') {
          setFiles(prev => 
            prev.map(f => 
              f.id === fileData.id 
                ? { ...f, status: 'uploading' }
                : f
            )
          )

          await uploadFile(fileData.file, {
            courseId,
            assignmentId,
            comments
          })

          setFiles(prev => 
            prev.map(f => 
              f.id === fileData.id 
                ? { ...f, status: 'complete', progress: 100 }
                : f
            )
          )
        }
      }

      // Create submission record
      const response = await fetch('/api/assignments/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId,
          assignmentId,
          comments
        })
      })

      if (!response.ok) {
        throw new Error('Failed to submit assignment')
      }

      toast({
        title: "Assignment submitted",
        description: "Your assignment has been submitted successfully."
      })

      onSubmissionComplete?.()

    } catch (error) {
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : 'Failed to submit assignment',
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId))
  }

  const isPastDue = dueDate ? new Date() > new Date(dueDate) : false

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Assignment</CardTitle>
        {dueDate && (
          <CardDescription>
            Due: {new Date(dueDate).toLocaleString()}
            {isPastDue && (
              <span className="text-red-500 ml-2">Past due</span>
            )}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* File Upload Area */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => e.target.files && handleFileSelect(e.target.files)}
              multiple
              accept={allowedFileTypes.join(',')}
              className="hidden"
            />

            <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-4">
              <Button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                variant="secondary"
              >
                Choose Files
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              or drag and drop your files here
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Maximum file size: {maxFileSize}MB. Allowed types: {allowedFileTypes.join(', ')}
            </p>
          </div>

          {/* File Progress List */}
          {files.length > 0 && (
            <div className="space-y-4">
              {files.map((fileData) => (
                <FileUploadProgress
                  key={fileData.id}
                  fileName={fileData.file.name}
                  fileSize={fileData.file.size}
                  progress={fileData.progress}
                  status={fileData.status}
                  error={fileData.error}
                  onCancel={() => removeFile(fileData.id)}
                  onRetry={() => {
                    removeFile(fileData.id)
                    handleFileSelect([fileData.file])
                  }}
                />
              ))}
            </div>
          )}

          {/* Comments */}
          <div className="space-y-2">
            <label htmlFor="comments" className="text-sm font-medium">
              Comments (optional)
            </label>
            <Textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Add any comments about your submission..."
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <Button
            className="w-full"
            onClick={handleSubmission}
            disabled={isSubmitting || files.length === 0 || isPastDue}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Assignment'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}