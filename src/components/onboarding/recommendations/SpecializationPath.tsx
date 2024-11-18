// src/components/onboarding/recommendations/SpecializationPath.tsx
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { Badge } from '@/components/ui/forms/badge';
import { Button } from '@/components/ui/forms/button';
import { useRouter } from 'next/navigation';
import {
  Briefcase,
  Code,
  Film,
  Layers,
  Monitor,
  Palette,
  ChevronRight
} from 'lucide-react';

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Software {
  name: string;
  icon: React.ReactNode;
}

interface CareerRole {
  title: string;
  company: string;
  salary: string;
}

interface Specialization {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: Skill[];
  software: Software[];
  careers: CareerRole[];
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const specializations: Specialization[] = [
  {
    id: 'character-fx',
    title: 'Character FX',
    description: 'Specialize in creating realistic character effects including hair, cloth, and dynamics',
    icon: <Layers className="w-6 h-6" />,
    skills: [
      { name: 'Hair Dynamics', level: 'advanced' },
      { name: 'Cloth Simulation', level: 'advanced' },
      { name: 'Character Rigging', level: 'intermediate' },
    ],
    software: [
      { name: 'Houdini', icon: <Code className="w-4 h-4" /> },
      { name: 'Maya', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Marvelous Designer', icon: <Palette className="w-4 h-4" /> },
    ],
    careers: [
      { title: 'FX Artist', company: 'Major Studios', salary: '$80k-120k' },
      { title: 'Technical Director', company: 'VFX Studios', salary: '$90k-130k' },
    ],
    duration: '18 months',
    difficulty: 'advanced'
  },
  // Add other specializations as needed
];

export function SpecializationPath() {
  const router = useRouter();
  const [selected, setSelected] = React.useState<string | null>(null);

  const handleSelect = async (specializationId: string) => {
    try {
      const response = await fetch('/api/user/specialization', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ specializationId }),
      });

      if (!response.ok) throw new Error('Failed to save specialization');
      
      router.push('/onboarding/degree-program/curriculum');
    } catch (error) {
      console.error('Failed to save specialization:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specializations.map((spec) => (
          <Card 
            key={spec.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selected === spec.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelected(spec.id)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {spec.icon}
                  <CardTitle className="text-lg">{spec.title}</CardTitle>
                </div>
                <Badge variant={
                  spec.difficulty === 'advanced' ? 'destructive' :
                  spec.difficulty === 'intermediate' ? 'secondary' :
                  'default'
                }>
                  {spec.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{spec.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {spec.skills.map((skill) => (
                      <Badge key={skill.name} variant="outline">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Software</h4>
                  <div className="flex gap-3">
                    {spec.software.map((sw) => (
                      <div key={sw.name} className="flex items-center gap-1">
                        {sw.icon}
                        <span className="text-sm">{sw.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Career Opportunities</h4>
                  <div className="space-y-2">
                    {spec.careers.map((career) => (
                      <div key={career.title} className="flex items-center justify-between text-sm">
                        <span>{career.title}</span>
                        <span className="text-muted-foreground">{career.salary}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    className="w-full"
                    onClick={() => handleSelect(spec.id)}
                  >
                    Choose Specialization
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SpecializationPath;