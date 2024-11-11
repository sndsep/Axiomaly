// src/components/onboarding/career-path/CareerPathCard.tsx

// This component renders a card for a career path option
// It displays the details of the career path and allows the user to select it

import { FC } from 'react';
import { Clock, Target, Trophy, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent } from '@/components/ui/forms/card';
import { CAREER_PATHS } from '../constants';
import type { CareerPath } from '../types';

interface CareerPathCardProps {
  type: CareerPath;
  details: typeof CAREER_PATHS[CareerPath];
  isLoading: boolean;
  onSelect: () => void;
}

export const CareerPathCard: FC<CareerPathCardProps> = ({
  type,
  details,
  isLoading,
  onSelect,
}) => {
  const isShortCourse = type === 'SHORT_COURSE';
  const colorClass = isShortCourse ? 'blue' : 'purple';

  return (
    <Card className={`border-2 hover:border-${colorClass}-400 transition-colors`}>
      <CardContent className="p-6">
        <div className="mb-6 text-center">
          <div className={`w-16 h-16 bg-${colorClass}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
            <div className={`w-8 h-8 text-${colorClass}-600`}>
              {details.icon === 'Rocket' ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{details.title}</h2>
          <p className="text-gray-600 mt-2">{details.description}</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <Clock className={`w-5 h-5 text-${colorClass}-600 flex-shrink-0`} />
            <div>
              <p className="font-medium">Duration</p>
              <p className="text-sm text-gray-600">{details.duration}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Target className={`w-5 h-5 text-${colorClass}-600 flex-shrink-0`} />
            <div>
              <p className="font-medium">Focus</p>
              <p className="text-sm text-gray-600">{details.focus}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Trophy className={`w-5 h-5 text-${colorClass}-600 flex-shrink-0`} />
            <div>
              <p className="font-medium">Outcome</p>
              <p className="text-sm text-gray-600">{details.outcome}</p>
            </div>
          </div>
        </div>

        <Button
          className={`w-full bg-${colorClass}-600 hover:bg-${colorClass}-700`}
          onClick={onSelect}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Selecting...
            </>
          ) : (
            `Choose ${details.title}`
          )}
        </Button>
      </CardContent>
    </Card>
  );
};