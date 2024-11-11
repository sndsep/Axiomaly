// src/components/onboarding/common/ProgressBar.tsx
import { FC } from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  progress: number; // 0 to 100
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  color?: 'blue' | 'green' | 'purple';
}

export const ProgressBar: FC<ProgressBarProps> = ({
  progress,
  showPercentage = false,
  size = 'md',
  className,
  color = 'blue'
}) => {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  // Size classes
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  // Color classes
  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600'
  };

  return (
    <div className={cn('w-full', className)}>
      <div className="w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={cn(
            'transition-all duration-500 ease-in-out rounded-full',
            sizeClasses[size],
            colorClasses[color]
          )}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {showPercentage && (
        <div className="mt-1 text-sm text-gray-600 text-right">
          {Math.round(clampedProgress)}%
        </div>
      )}
    </div>
  );
};

// Progress indicator with label
export const LabeledProgressBar: FC<ProgressBarProps & { label: string }> = ({
  label,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium">{label}</span>
        {props.showPercentage && (
          <span className="text-gray-600">{Math.round(props.progress)}%</span>
        )}
      </div>
      <ProgressBar {...props} showPercentage={false} />
    </div>
  );
};

// Progress steps indicator
export const StepProgressBar: FC<{
  totalSteps: number;
  currentStep: number;
  labels?: string[];
  className?: string;
}> = ({ totalSteps, currentStep, labels, className }) => {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className={cn('space-y-4', className)}>
      <ProgressBar progress={progress} size="sm" />
      {labels && (
        <div className="flex justify-between">
          {labels.map((label, index) => (
            <div
              key={index}
              className={cn(
                'text-xs font-medium',
                index < currentStep ? 'text-blue-600' : 'text-gray-400'
              )}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};