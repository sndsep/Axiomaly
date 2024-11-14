// src/components/onboarding/short-course/Survey.tsx
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/forms/button';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { OnboardingLayout } from '../common/OnboardingLayout';

const ShortCourseSurvey = () => {
    const { toast } = useToast();
    const [experienceLevel, setExperienceLevel] = useState('');
    const [interests, setInterests] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleExperienceChange = (level: string) => {
        setExperienceLevel(level);
    };

    const handleInterestChange = (interest: string) => {
        setInterests((prev) => 
            prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
        );
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            // Handle form submission logic here
            console.log('Experience Level:', experienceLevel);
            console.log('Interests:', interests);
            toast({
                title: "Survey completed!",
                description: "Let's create your personalized learning experience.",
            });
            // Redirect or further logic here
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
                                {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                                    <div key={level} className="text-center">
                                        <input type="radio" name="experience" value={level} onChange={() => handleExperienceChange(level)} />
                                        <label className="ml-2">{level}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interests */}
                        <div>
                            <h2 className="text-xl font-semibold">2. Which areas of VFX are you most interested in? (Select up to 3)</h2>
                            <div className="flex flex-col space-y-2">
                                {['3D Modeling', 'Animation', 'Compositing', 'Lighting', 'Texturing', 'Rigging'].map(interest => (
                                    <div key={interest} className="flex items-center">
                                        <input type="checkbox" onChange={() => handleInterestChange(interest)} />
                                        <label className="ml-2">{interest}</label>
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