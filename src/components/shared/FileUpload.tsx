// src/components/shared/FileUpload.tsx
'use client';

import React from 'react';
import { useUploadThing } from '@/lib/uploadthing';
import { Card } from '@/components/ui/forms/card';
import { Button } from '@/components/ui/forms/button';
import { Progress } from '@/components/ui/forms/progress';
import { FileIcon, X, Upload, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/hooks/use-toast';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  endpoint: 'courseMaterial' | 'assignmentSubmission';
  maxFiles?: number;
  maxSize?: number;
  accept?: string[];
  onUploadComplete?: (files: { name: string; url: string; type: string }[]) => void;
  onUploadError?: (error: Error) => void;
}

export function FileUpload({
  endpoint,
  maxFiles = 10,
  maxSize = 1024 * 1024 * 1024, // 1GB default
  accept,
  onUploadComplete,
  onUploadError
}: FileUploadProps) {
  const [files, setFiles] = React.useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = React.useState<Record<string, number>>({});
  const [error, setError] = React.useState<string | null>(null);
  const { toast } = useToast();

  const { startUpload, isUploading } = useUploadThing(endpoint, {
    onUploadProgress: (progress) => {
      setUploadProgress(prev => ({
        ...prev,
        [progress.fileName]: progress.progress
      }));
    },
    onClientUploadComplete: (res) => {
      toast({
        title: "Upload complete",
        description: `Successfully uploaded ${res.length} file${res.length === 1 ? '' : 's'}`,
      });
      onUploadComplete?.(res.map(file => ({
        name: file.name,
        url: file.url,
        type: file.type
      })));
      setFiles([]);
      setUploadProgress({});
    },
    onUploadError: (error) => {
      setError(error.message);
      onUploadError?.(error);
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleDragOver = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  }, []);

  const handleFiles = (newFiles: File[]) => {
    // Validate file types
    if (accept) {
      const invalidFiles = newFiles.filter(
        file => !accept.some(type => file.type.startsWith(type))
      );
      if (invalidFiles.length > 0) {
        setError(`Invalid file type(s): ${invalidFiles.map(f => f.name).join(', ')}`);
        return;
      }
    }

    // Validate file sizes
    const oversizedFiles = newFiles.filter(file => file.size > maxSize);
    if (oversizedFiles.length > 0) {
      setError(`File(s) too large: ${oversizedFiles.map(f => f.name).join(', ')}`);
      return;
    }

    // Check max files
    if (files.length + newFiles.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    setFiles(prev => [...prev, ...newFiles]);
    setError(null);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    
    try {
      await startUpload(files);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <div className="space-y-4">
      {/* Drop zone */}
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer",
          "hover:border-primary transition-colors",
          isUploading && "opacity-50 cursor-not-allowed"
        )}
        onClick={() => {
          if (!isUploading) {
            document.getElementById('file-input')?.click();
          }
        }}
      >
        <input
          id="file-input"
          type="file"
          multiple
          accept={accept?.join(',')}
          className="hidden"
          onChange={(e) => handleFiles(Array.from(e.target.files || []))}
          disabled={isUploading}
        />

        <Upload className="w-10 h-10 text-gray-400 mx-auto mb-4" />
        <p className="text-sm text-gray-600">
          Drag and drop files here, or click to select files
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Maximum {maxFiles} files, up to {Math.round(maxSize / 1024 / 1024)}MB each
        </p>
      </div>

      {/* Error message */}
      {error && (
        <div className="flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      {/* File list */}
      {files.length > 0 && (
        <Card className="p-4">
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 rounded"
              >
                <div className="flex items-center gap-2">
                  <FileIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{file.name}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  {uploadProgress[file.name] !== undefined && (
                    <Progress
                      value={uploadProgress[file.name]}
                      className="w-24"
                    />
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    disabled={isUploading}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button
            className="mt-4 w-full"
            onClick={handleUpload}
            disabled={isUploading || files.length === 0}
          >
            {isUploading ? 'Uploading...' : 'Upload Files'}
          </Button>
        </Card>
      )}
    </div>
  );
}