// src/components/courses/lessons/types/AssignmentLesson.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/forms/button';
import { Card } from '@/components/ui/forms/card';
import { Textarea } from '@/components/ui/forms/textarea';
import { Input } from '@/components/ui/forms/input';
import { Progress } from '@/components/ui/forms/progress';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/hooks/use-toast';

interface Assignment {
  title: string;
  description: string;
  requirements: string[];
  deadline?: string;
  maxFileSize?: number;
  allowedFileTypes?: string[];
}

interface AssignmentLessonProps {
  assignment: Assignment;
  onComplete: () => void;
  isCompleted: boolean;
}

export function AssignmentLesson({
  assignment,
  onComplete,
  isCompleted
}: AssignmentLessonProps) {
  const [files, setFiles] = React.useState<File[]>([]);
  const [notes, setNotes] = React.useState('');
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    
    // Validate file types and sizes
    const validFiles = selectedFiles.filter(file => {
      const isValidType = assignment.allowedFileTypes?.some(type => 
        file.type.startsWith(type)
      ) ?? true;
      
      const isValidSize = file.size <= (assignment.maxFileSize || 5) * 1024 * 1024;
      
      return isValidType && isValidSize;
    });

    if (validFiles.length !== selectedFiles.length) {
      toast({
        title: "Invalid files",
        description: "Some files were rejected due to type or size restrictions",
        variant: "destructive",
      });
    }

    setFiles(validFiles);
  };

  const handleSubmit = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload your assignment files",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate file upload with progress
      for (let i = 0; i <= 100; i += 10) {
        setUploadProgress(i);
        await new Promise(r => setTimeout(r, 200));
      }

      // Here you would actually upload the files
      // const formData = new FormData();
      // files.forEach(file => formData.append('files', file));
      // formData.append('notes', notes);
      // await uploadAssignment(formData);

      onComplete();
      toast({
        title: "Success",
        description: "Assignment submitted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit assignment",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold mb-4">{assignment.title}</h3>
          <p className="mb-4">{assignment.description}</p>
          
          <div className="mb-6">
            <h4 className="font-medium mb-2">Requirements:</h4>
            <ul className="list-disc pl-5">
              {assignment.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          {assignment.deadline && (
            <p className="text-sm text-gray-600 mb-4">
              Deadline: {new Date(assignment.deadline).toLocaleDateString()}
            </p>
          )}
        </div>

        <div className="space-y-4 mt-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Upload Files
            </label>
            <Input
              type="file"
              multiple
              onChange={handleFileChange}
              accept={assignment.allowedFileTypes?.join(',')}
              disabled={isSubmitting}
            />
            <p className="text-xs text-gray-500 mt-1">
              Max file size: {assignment.maxFileSize || 5}MB
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Notes
            </label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any notes about your submission..."
              disabled={isSubmitting}
            />
          </div>

          {uploadProgress > 0 && (
            <div className="space-y-2">
              <Progress value={uploadProgress} />
              <p className="text-sm text-gray-600">
                Uploading... {uploadProgress}%
              </p>
            </div>
          )}
        </div>
      </Card>

      <div className="flex items-center justify-between">
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || isCompleted}
        >
          {isSubmitting ? (
            <Upload className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Upload className="w-4 h-4 mr-2" />
          )}
          Submit Assignment
        </Button>

        {isCompleted && (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-5 h-5" />
            <span>Submitted</span>
          </div>
        )}
      </div>
    </div>
  );
}