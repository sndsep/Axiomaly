// src/components/onboarding/CareerPathSelection.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useToast } from '@/components/ui/hooks/use-toast';
import type { CareerPathType } from '@/types/onboarding';

export function CareerPathSelection() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<CareerPathType | null>(null);

  const handlePathSelection = async (type: CareerPathType) => {
    if (isLoading) return;
    
    setIsLoading(type);
    try {
      const response = await fetch('/api/onboarding/career-path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ careerPath: type }),
      });

      if (!response.ok) {
        throw new Error('Failed to save career path');
      }

      const data = await response.json();
      
      if (data.success) {
        // Use the nextPath from the API response
        router.push(`/onboarding/${data.nextPath}`);
      } else {
        throw new Error('Invalid response from server');
      }

    } catch (error) {
      console.error('Error saving career path:', error);
      toast({
        title: "Error",
        description: "Failed to save your selection. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };

  // ... rest of your component code ...
}