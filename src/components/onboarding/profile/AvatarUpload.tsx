// src/components/onboarding/profile/AvatarUpload.tsx
'use client';

import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Camera, Upload, X } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/forms/avatar';
import { Button } from '@/components/ui/forms/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/forms/dialog';
import { useToast } from '@/components/ui/hooks/use-toast';

interface AvatarUploadProps {
  currentImage?: string | null;
  userEmail?: string;
}

export function AvatarUpload({ currentImage, userEmail }: AvatarUploadProps) {
  const [preview, setPreview] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isUploading, setIsUploading] = React.useState(false);
  const { toast } = useToast();

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/gif': [],
    },
    maxFiles: 1,
    multiple: false,
  });

  const handleUpload = async () => {
    if (!preview) return;
    setIsUploading(true);

    try {
      const response = await fetch('/api/user/avatar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: preview }),
      });

      if (!response.ok) throw new Error('Failed to upload avatar');

      toast({
        title: "Success",
        description: "Your profile picture has been updated.",
      });
      
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile picture. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = async () => {
    try {
      const response = await fetch('/api/user/avatar', {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to remove avatar');

      setPreview(null);
      toast({
        title: "Success",
        description: "Your profile picture has been removed.",
      });
      
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove profile picture. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getInitials = (email: string) => {
    return email.split('@')[0].slice(0, 2).toUpperCase();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative group cursor-pointer">
          <Avatar className="h-24 w-24">
            <AvatarImage src={currentImage || undefined} />
            <AvatarFallback>
              {userEmail ? getInitials(userEmail) : '??'}
            </AvatarFallback>
          </Avatar>
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera className="h-8 w-8 text-white" />
          </div>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Profile Picture</DialogTitle>
          <DialogDescription>
            Upload a new profile picture or remove your current one.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div
            {...getRootProps()}
            className={`
              border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
              ${isDragActive ? 'border-primary bg-primary/10' : 'border-muted hover:border-primary'}
            `}
          >
            <input {...getInputProps()} />
            {preview ? (
              <div className="relative mx-auto w-40 h-40">
                <img
                  src={preview}
                  alt="Preview"
                  className="rounded-lg object-cover w-full h-full"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreview(null);
                  }}
                  className="absolute -top-2 -right-2 p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Upload className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                  <div className="text-xs">SVG, PNG, JPG or GIF (max. 800x800px)</div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            {currentImage && (
              <Button
                type="button"
                variant="outline"
                disabled={isUploading}
                onClick={handleRemove}
              >
                Remove Picture
              </Button>
            )}
            <Button
              type="button"
              disabled={!preview || isUploading}
              onClick={handleUpload}
              className="ml-auto"
            >
              {isUploading ? "Uploading..." : "Upload Picture"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AvatarUpload;