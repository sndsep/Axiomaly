// src/components/onboarding/tour/TourStep.tsx
'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/forms/card';
import Portal from '@/components/ui/portal';
import { cn } from '@/lib/utils';

interface TourStepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  targetSelector: string;
  position: 'left' | 'right' | 'top' | 'bottom';
  isVisible: boolean;
  children?: React.ReactNode;
}

export function TourStep({
  title,
  description,
  icon,
  targetSelector,
  position,
  isVisible,
  children
}: TourStepProps) {
  const [coords, setCoords] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    if (!isVisible) return;

    const updatePosition = () => {
      const targetElement = document.querySelector(targetSelector);
      if (!targetElement) return;

      const rect = targetElement.getBoundingClientRect();
      const positions = {
        top: {
          top: rect.top - 20 - 200, // height of card + padding
          left: rect.left + (rect.width / 2) - 150 // half of card width
        },
        bottom: {
          top: rect.bottom + 20,
          left: rect.left + (rect.width / 2) - 150
        },
        left: {
          top: rect.top + (rect.height / 2) - 100,
          left: rect.left - 20 - 300 // width of card + padding
        },
        right: {
          top: rect.top + (rect.height / 2) - 100,
          left: rect.right + 20
        }
      };

      setCoords(positions[position]);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [isVisible, targetSelector, position]);

  if (!isVisible) return null;

  const arrowClasses = {
    top: 'bottom-[-8px] left-1/2 transform -translate-x-1/2 border-t-8 border-x-8 border-x-transparent',
    bottom: 'top-[-8px] left-1/2 transform -translate-x-1/2 border-b-8 border-x-8 border-x-transparent',
    left: 'right-[-8px] top-1/2 transform -translate-y-1/2 border-l-8 border-y-8 border-y-transparent',
    right: 'left-[-8px] top-1/2 transform -translate-y-1/2 border-r-8 border-y-8 border-y-transparent'
  };

  return (
    <Portal>
      <div
        className="fixed z-[60] pointer-events-auto"
        style={{ top: coords.top, left: coords.left }}
      >
        <Card className="w-[300px]">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-full">
                {icon}
              </div>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {description}
            </p>
            {children}
          </CardContent>
          <div
            className={cn(
              'absolute w-0 h-0 border-solid border-white',
              arrowClasses[position]
            )}
          />
        </Card>
      </div>
    </Portal>
  );
}

export default TourStep;
