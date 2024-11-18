// src/components/onboarding/survey/ExperienceLevelSelect.tsx
'use client';

import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/forms/radio-group';
import { Label } from '@/components/ui/forms/label';
import { Card } from '@/components/ui/forms/card';
import { Code2, Lightbulb, Trophy } from 'lucide-react';

interface ExperienceLevelSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const experienceLevels = [
  {
    value: 'beginner',
    label: 'Beginner',
    description: 'New to VFX, eager to learn fundamentals',
    icon: Lightbulb,
  },
  {
    value: 'intermediate',
    label: 'Intermediate',
    description: 'Familiar with basics, ready to advance skills',
    icon: Code2,
  },
  {
    value: 'advanced',
    label: 'Advanced',
    description: 'Experienced, seeking to master complex techniques',
    icon: Trophy,
  },
];

export function ExperienceLevelSelect({ value, onChange }: ExperienceLevelSelectProps) {
  return (
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      {experienceLevels.map((level) => {
        const Icon = level.icon;
        return (
          <Card
            key={level.value}
            className={`relative p-4 cursor-pointer transition-all ${
              value === level.value
                ? 'border-2 border-blue-500 shadow-md'
                : 'border hover:border-blue-200'
            }`}
          >
            <RadioGroupItem
              value={level.value}
              id={level.value}
              className="sr-only"
            />
            <Label
              htmlFor={level.value}
              className="flex flex-col items-center space-y-3 cursor-pointer"
            >
              <Icon className={`w-8 h-8 ${
                value === level.value ? 'text-blue-500' : 'text-gray-400'
              }`} />
              <div className="text-center">
                <div className="font-medium">{level.label}</div>
                <div className="text-sm text-gray-500">{level.description}</div>
              </div>
            </Label>
          </Card>
        );
      })}
    </RadioGroup>
  );
}