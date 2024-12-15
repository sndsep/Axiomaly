// src/components/courses/lessons/types/VideoLesson.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/forms/button';
import { Progress } from '@/components/ui/forms/progress';
import { Play, Pause, RotateCcw, FastForward } from 'lucide-react';

interface VideoLessonProps {
  videoUrl: string;
  onComplete: () => void;
  isCompleted: boolean;
}

export function VideoLesson({ videoUrl, onComplete, isCompleted }: VideoLessonProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [hasWatched85Percent, setHasWatched85Percent] = React.useState(false);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(percentage);

    // Mark as complete when watched 85% of the video
    if (percentage >= 85 && !hasWatched85Percent) {
      setHasWatched85Percent(true);
      onComplete();
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRewind = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime -= 10;
  };

  const handleForward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime += 10;
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full"
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>

      <div className="space-y-2">
        <Progress value={progress} className="w-full" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRewind}
            >
              <RotateCcw className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleForward}
            >
              <FastForward className="w-4 h-4" />
            </Button>
          </div>

          {isCompleted && (
            <span className="text-sm text-green-600">
              ✓ Completed
            </span>
          )}
        </div>
      </div>
    </div>
  );
}