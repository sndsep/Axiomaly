// src/components/common/ErrorBoundary.tsx
// This component is used to handle errors in the application

'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent } from '@/components/ui/forms/card';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Curriculum error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card className="mx-auto max-w-lg mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
              <p className="text-gray-600 mb-4">
                We encountered an error while loading your curriculum. Please try again.
              </p>
              <Button
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto"
              >
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    return this.props.children;
  }
}