// src/components/onboarding/career-path/CareerPathCard.tsx
import { FC } from 'react';
import { Clock, Target, Trophy, Loader2, Rocket, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent } from '@/components/ui/forms/card';
import { CareerPath } from '@prisma/client';

interface CareerPathDetails {
  title: string;
  description: string;
  icon: 'Rocket' | 'GraduationCap';
  duration: string;
  focus: string;
  outcome: string;
}

interface CareerPathCardProps {
  type: CareerPath;
  details: CareerPathDetails;
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
  const IconComponent = details.icon === 'Rocket' ? Rocket : GraduationCap;
  const baseColorClass = isShortCourse ? 'blue' : 'purple';

  return (
    <div className="flex flex-col gap-4">
      <Card className={`border-t-4 ${isShortCourse ? 'border-t-blue-500' : 'border-t-purple-500'}`}>
        <CardContent className="p-6">
          <div className="mb-6 text-center">
            <div className={`w-16 h-16 ${isShortCourse ? 'bg-blue-100' : 'bg-purple-100'} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <IconComponent className={`w-8 h-8 ${isShortCourse ? 'text-blue-600' : 'text-purple-600'}`} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{details.title}</h2>
            <p className="text-gray-600 mt-2">{details.description}</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <Clock className={`w-5 h-5 ${isShortCourse ? 'text-blue-600' : 'text-purple-600'} flex-shrink-0`} />
              <div>
                <p className="font-medium">Duration</p>
                <p className="text-sm text-gray-600">{details.duration}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Target className={`w-5 h-5 ${isShortCourse ? 'text-blue-600' : 'text-purple-600'} flex-shrink-0`} />
              <div>
                <p className="font-medium">Focus</p>
                <p className="text-sm text-gray-600">{details.focus}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Trophy className={`w-5 h-5 ${isShortCourse ? 'text-blue-600' : 'text-purple-600'} flex-shrink-0`} />
              <div>
                <p className="font-medium">Outcome</p>
                <p className="text-sm text-gray-600">{details.outcome}</p>
              </div>
            </div>
          </div>

          <Button
            className={`w-full ${isShortCourse ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'}`}
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
    </div>
  );
};