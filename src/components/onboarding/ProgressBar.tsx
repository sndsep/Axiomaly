// src/components/onboarding/ProgressBar.tsx
'use client';

import { usePathname } from 'next/navigation';

const steps = [
  { id: 1, name: 'Career Path', path: '/onboarding/career-path' },
  { id: 2, name: 'Interests', path: '/onboarding/interests' },
  { id: 3, name: 'Course Recommendations', path: '/onboarding/course-recommendations' },
  { id: 4, name: 'Complete Profile', path: '/onboarding/profile' },
] as const;

export function ProgressBar() {
  const pathname = usePathname();
  const currentStep = steps.findIndex(step => step.path === pathname) + 1;

  return (
    <div className="py-8 mb-8">
      <div className="max-w-3xl mx-auto">
        <nav className="flex justify-center" aria-label="Progress">
          <ol role="list" className="flex items-center">
            {steps.map((step, stepIdx) => (
              <li key={step.id} className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  {stepIdx !== steps.length - 1 && (
                    <div className={`h-0.5 w-full ${step.id < currentStep ? 'bg-blue-600' : 'bg-gray-200'}`} />
                  )}
                </div>
                <div 
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 
                    ${step.id === currentStep ? 'border-blue-600 bg-white' : 
                      step.id < currentStep ? 'border-blue-600 bg-blue-600' : 
                      'border-gray-200 bg-white'}`}
                >
                  {step.id < currentStep ? (
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : step.id === currentStep ? (
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                  ) : (
                    <div className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                  )}
                </div>
                <div className="absolute top-10 whitespace-nowrap">
                  <div className="flex flex-col items-center">
                    <span className={`text-sm font-medium ${step.id === currentStep ? 'text-blue-600' : 'text-gray-500'}`}>
                      Step {step.id}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      {step.name}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}