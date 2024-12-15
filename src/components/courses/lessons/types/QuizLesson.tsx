// src/components/courses/lessons/types/QuizLesson.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/forms/button';
import { Card } from '@/components/ui/forms/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/forms/radio-group';
import { Checkbox } from '@/components/ui/forms/checkbox';
import { Input } from '@/components/ui/forms/input';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { z } from 'zod';

// Types for quiz questions
type QuestionType = 'single' | 'multiple' | 'text';

interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
}

interface QuizData {
  questions: QuizQuestion[];
  passingScore: number;
  maxAttempts: number;
}

interface QuizLessonProps {
  quizData: QuizData;
  onComplete: () => void;
  isCompleted: boolean;
}

export function QuizLesson({ quizData, onComplete, isCompleted }: QuizLessonProps) {
  const [currentAttempt, setCurrentAttempt] = React.useState(1);
  const [answers, setAnswers] = React.useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const handleAnswerChange = (questionId: string, answer: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    quizData.questions.forEach(question => {
      const userAnswer = answers[question.id];
      if (Array.isArray(question.correctAnswer)) {
        // Multiple choice
        if (Array.isArray(userAnswer) && 
            userAnswer.length === question.correctAnswer.length && 
            userAnswer.every(a => question.correctAnswer.includes(a))) {
          correct++;
        }
      } else {
        // Single choice or text
        if (userAnswer === question.correctAnswer) {
          correct++;
        }
      }
    });
    return (correct / quizData.questions.length) * 100;
  };

  const handleSubmit = () => {
    const calculatedScore = calculateScore();
    setScore(calculatedScore);
    setShowResults(true);

    if (calculatedScore >= quizData.passingScore) {
      onComplete();
    } else if (currentAttempt >= quizData.maxAttempts) {
      // Handle max attempts reached
      // Could show a message or disable the quiz
    } else {
      setCurrentAttempt(prev => prev + 1);
    }
  };

  const renderQuestion = (question: QuizQuestion) => {
    switch (question.type) {
      case 'single':
        return (
          <RadioGroup
            onValueChange={(value) => handleAnswerChange(question.id, value)}
            value={answers[question.id] as string}
          >
            {question.options?.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                <label htmlFor={`${question.id}-${option}`}>{option}</label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'multiple':
        return (
          <div className="space-y-2">
            {question.options?.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={`${question.id}-${option}`}
                  checked={(answers[question.id] as string[] || []).includes(option)}
                  onCheckedChange={(checked) => {
                    const currentAnswers = answers[question.id] as string[] || [];
                    if (checked) {
                      handleAnswerChange(question.id, [...currentAnswers, option]);
                    } else {
                      handleAnswerChange(
                        question.id,
                        currentAnswers.filter(a => a !== option)
                      );
                    }
                  }}
                />
                <label htmlFor={`${question.id}-${option}`}>{option}</label>
              </div>
            ))}
          </div>
        );

      case 'text':
        return (
          <Input
            value={(answers[question.id] as string) || ''}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            placeholder="Type your answer..."
          />
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {quizData.questions.map((question, index) => (
          <Card key={question.id} className="p-6">
            <div className="space-y-4">
              <h3 className="font-semibold">
                Question {index + 1}: {question.question}
              </h3>

              {renderQuestion(question)}

              {showResults && (
                <div className="mt-4">
                  {question.explanation && (
                    <p className="text-gray-600 text-sm mt-2">
                      {question.explanation}
                    </p>
                  )}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div>
          {!isCompleted && (
            <p className="text-sm text-gray-600">
              Attempt {currentAttempt} of {quizData.maxAttempts}
            </p>
          )}
        </div>

        {!showResults ? (
          <Button onClick={handleSubmit}>
            Submit Quiz
          </Button>
        ) : (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {score >= quizData.passingScore ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-600">Passed!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-600">Try Again</span>
                </>
              )}
            </div>
            
            {score < quizData.passingScore && currentAttempt < quizData.maxAttempts && (
              <Button 
                onClick={() => {
                  setShowResults(false);
                  setAnswers({});
                }}
              >
                Retry Quiz
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}