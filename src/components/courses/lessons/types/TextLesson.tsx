// src/components/courses/lessons/types/TextLesson.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/forms/button';
import { Card } from '@/components/ui/forms/card';
import { CheckCircle } from 'lucide-react';
import Markdown from 'react-markdown';
import { useInView } from 'react-intersection-observer';

interface TextLessonProps {
  content: string;
  onComplete: () => void;
  isCompleted: boolean;
}

export function TextLesson({ content, onComplete, isCompleted }: TextLessonProps) {
  const [hasReachedBottom, setHasReachedBottom] = React.useState(false);
  const { ref: bottomRef, inView } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if (inView) {
        setHasReachedBottom(true);
      }
    },
  });

  React.useEffect(() => {
    if (hasReachedBottom && !isCompleted) {
      onComplete();
    }
  }, [hasReachedBottom, isCompleted, onComplete]);

  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="prose max-w-none">
          <Markdown>{content}</Markdown>
        </div>
        
        {/* Invisible element to detect when user reaches bottom */}
        <div ref={bottomRef} className="h-1" />
      </Card>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onComplete}
          disabled={isCompleted}
        >
          Mark as Complete
        </Button>

        {isCompleted && (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-5 h-5" />
            <span>Completed</span>
          </div>
        )}
      </div>

      {!hasReachedBottom && !isCompleted && (
        <p className="text-sm text-gray-500 text-center">
          Scroll to the bottom to mark as complete
        </p>
      )}
    </div>
  );
}