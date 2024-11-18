// src/components/onboarding/recommendations/CurriculumPlan.tsx
'use client';

import React from 'react';
import { useOnboarding } from '@/contexts/onboarding-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { Button } from '@/components/ui/forms/button';
import { Check, Clock, GraduationCap, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/forms/badge';
import type { CurriculumPlan as CurriculumPlanType } from '@/types/onboarding';

interface CurriculumPlanProps {
  plan: CurriculumPlanType;
}

export function CurriculumPlan({ plan }: CurriculumPlanProps) {
  const { nextStep } = useOnboarding();
  const [isAccepting, setIsAccepting] = React.useState(false);

  const handleAcceptPlan = async () => {
    setIsAccepting(true);
    try {
      await fetch('/api/user/accept-curriculum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan }),
      });
      nextStep();
    } catch (error) {
      console.error('Error accepting curriculum:', error);
    } finally {
      setIsAccepting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{plan.specialization} Track</span>
            <Badge variant="secondary">
              {plan.totalDuration}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <div>
                <div className="font-medium">Duration</div>
                <div className="text-sm text-gray-500">{plan.totalDuration}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <div>
                <div className="font-medium">Certifications</div>
                <div className="text-sm text-gray-500">{plan.certifications.length} Industry Certs</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-500" />
              <div>
                <div className="font-medium">Career Path</div>
                <div className="text-sm text-gray-500">{plan.careerOutcomes[0]}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Curriculum by Term */}
      <div className="space-y-6">
        {plan.courses.map((term, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">Term {term.term}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {term.courses.map((course, courseIndex) => (
                  <div
                    key={courseIndex}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-sm text-gray-500">{course.description}</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">{course.level}</Badge>
                        <Badge variant="outline">{course.duration}</Badge>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 whitespace-nowrap">
                      Match Score: {course.matchScore}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Career Outcomes */}
      <Card>
        <CardHeader>
          <CardTitle>Career Outcomes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plan.careerOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardHeader>
          <CardTitle>Industry Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plan.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <Badge variant="secondary" className="h-8 w-8 rounded-full flex items-center justify-center">
                  {index + 1}
                </Badge>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={handleAcceptPlan}
          className="flex-1"
          disabled={isAccepting}
        >
          {isAccepting ? 'Accepting...' : 'Accept Curriculum Plan'}
        </Button>
        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="flex-1"
        >
          Modify Preferences
        </Button>
      </div>
    </div>
  );
}