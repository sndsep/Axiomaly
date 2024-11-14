"use client";
// src/components/onboarding/short-course/Survey.tsx

import React, { useState } from 'react';
import { Button } from '@/components/ui/forms/button';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { OnboardingLayout } from '../common/OnboardingLayout';
import { OnboardingProgress } from '../common/OnboardingProgress';
import { ProgressBar } from '../common/ProgressBar';
import { OnboardingStep } from '@/types/onboarding';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

const surveySchema = z.object({
    experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
    interests: z.array(z.string()).min(1, 'Please select at least one interest'),
});

const steps = [
    { id: OnboardingStep.EXPERIENCE, title: 'Experience Level', description: 'Select your experience level' },
    { id: OnboardingStep.INTERESTS, title: 'Interests', description: 'Select your interests' },
];

const ShortCourseSurvey = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const form = useForm<{
        experienceLevel: 'beginner' | 'intermediate' | 'advanced';
        interests: string[];
    }>({
        resolver: zodResolver(surveySchema),
        defaultValues: {
            experienceLevel: 'beginner',
            interests: [],
        },
    });

    const handleExperienceChange = (level: string) => {
        form.setValue('experienceLevel', level as 'beginner' | 'intermediate' | 'advanced');
    };

    const handleInterestChange = (interest: string) => {
        const currentInterests = form.getValues('interests');
        form.setValue('interests', currentInterests.includes(interest) 
            ? currentInterests.filter(i => i !== interest) 
            : [...currentInterests, interest]
        );
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const data = form.getValues();
            console.log('Form Data:', data);
            const session = await getServerSession(authOptions);
            const userId = session?.user?.id;

            const response = await fetch('/api/onboarding/survey', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to save survey responses');
            }

            const progressResponse = await fetch('/api/onboarding/progress', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: userId,
                    responses: data,
                    currentStep: OnboardingStep.INTERESTS,
                }),
            });

            if (!progressResponse.ok) {
                throw new Error('Failed to update onboarding progress');
            }

            toast({
                title: "Survey completed!",
                description: "Let's create your personalized learning experience.",
            });

            router.push('/onboarding/short-course/recommendations');
        } catch (error) {
            console.error('Error saving survey:', error);
            toast({
                title: "Error",
                description: "Failed to save your responses. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <OnboardingLayout>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <OnboardingProgress steps={steps} currentStep={OnboardingStep.EXPERIENCE} completedSteps={[]} />
                    <ProgressBar progress={50} />
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Short Course Survey
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Help us personalize your learning experience
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Experience Level */}
                        <div>
                            <h2 className="text-xl font-semibold">1. What's your current level of experience with VFX?</h2>
                            <div className="flex justify-center space-x-4">
                                {['Beginner', 'Intermediate', 'Advanced'].map((level: string, i: number) => (
                                    <div key={i} className="text-center">
                                        <input 
                                            type="radio" 
                                            name="experience" 
                                            value={level} 
                                            onChange={() => handleExperienceChange(level)} 
                                        />
                                        <label>{level}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interests */}
                        <div>
                            <h2 className="text-xl font-semibold">2. Which areas of VFX are you most interested in? (Select up to 3)</h2>
                            <div className="flex flex-col space-y-2">
                                {['3D Modeling', 'Animation', 'Compositing', 'Lighting', 'Texturing', 'Rigging'].map((interest: string, i: number) => (
                                    <div key={i} className="flex items-center">
                                        <input 
                                            type="checkbox" 
                                            onChange={() => handleInterestChange(interest)} 
                                        />
                                        <label>{interest}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                            className="w-full bg-purple-600 hover:bg-purple-700"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </OnboardingLayout>
    );
};

export default ShortCourseSurvey;