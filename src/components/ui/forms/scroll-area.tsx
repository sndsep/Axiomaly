// src/components/ui/forms/scroll-area.tsx
'use client'

import React from 'react';

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollArea({ children, className = '' }: ScrollAreaProps) {
  return (
    <div className={`overflow-auto ${className}`}>
      {children}
    </div>
  );
}
