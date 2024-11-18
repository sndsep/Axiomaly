// src/components/onboarding/survey/InterestSelection.tsx
'use client';

import React from 'react';
import { Checkbox } from '@/components/ui/forms/checkbox';
import { Label } from '@/components/ui/forms/label';
import { Card } from '@/components/ui/forms/card';
import { Badge } from '@/components/ui/forms/badge';

interface Interest {
  id: string;
  label: string;
  description: string;
  category: string;
}

interface InterestSelectionProps {
  selectedInterests: string[];
  onChange: (interests: string[]) => void;
  maxSelections?: number;
}

const vfxInterests: Interest[] = [
  {
    id: '3d-modeling',
    label: '3D Modeling',
    description: 'Create detailed 3D models for characters and environments',
    category: 'Modeling',
  },
  {
    id: 'character-animation',
    label: 'Character Animation',
    description: 'Bring characters to life with realistic movement',
    category: 'Animation',
  },
  {
    id: 'vfx-compositing',
    label: 'VFX Compositing',
    description: 'Combine visual elements into seamless scenes',
    category: 'Compositing',
  },
  {
    id: 'lighting-rendering',
    label: 'Lighting & Rendering',
    description: 'Create stunning visual atmospheres',
    category: 'Technical',
  },
  {
    id: 'particle-effects',
    label: 'Particle Effects',
    description: 'Design dynamic effects like fire, smoke, and explosions',
    category: 'Effects',
  },
  {
    id: 'motion-graphics',
    label: 'Motion Graphics',
    description: 'Create engaging animated graphics and titles',
    category: 'Design',
  },
];

export function InterestSelection({ 
  selectedInterests, 
  onChange, 
  maxSelections = 3 
}: InterestSelectionProps) {
  const handleToggleInterest = (interestId: string) => {
    if (selectedInterests.includes(interestId)) {
      onChange(selectedInterests.filter(id => id !== interestId));
    } else if (selectedInterests.length < maxSelections) {
      onChange([...selectedInterests, interestId]);
    }
  };

  const groupedInterests = vfxInterests.reduce((acc, interest) => {
    if (!acc[interest.category]) {
      acc[interest.category] = [];
    }
    acc[interest.category].push(interest);
    return acc;
  }, {} as Record<string, Interest[]>);

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-500">
        Select up to {maxSelections} areas of interest
      </div>

      {Object.entries(groupedInterests).map(([category, interests]) => (
        <div key={category}>
          <h3 className="text-sm font-medium text-gray-700 mb-3">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {interests.map((interest) => (
              <Card
                key={interest.id}
                className={`p-4 cursor-pointer transition-all ${
                  selectedInterests.includes(interest.id)
                    ? 'border-2 border-blue-500 bg-blue-50'
                    : 'hover:border-blue-200'
                }`}
                onClick={() => handleToggleInterest(interest.id)}
              >
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id={interest.id}
                    checked={selectedInterests.includes(interest.id)}
                    onCheckedChange={() => handleToggleInterest(interest.id)}
                  />
                  <div className="flex-1">
                    <Label
                      htmlFor={interest.id}
                      className="text-base font-medium cursor-pointer"
                    >
                      {interest.label}
                    </Label>
                    <p className="text-sm text-gray-500 mt-1">
                      {interest.description}
                    </p>
                  </div>
                  <Badge variant="secondary">{category}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}