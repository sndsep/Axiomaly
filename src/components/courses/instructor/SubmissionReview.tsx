// src/components/courses/instructor/SubmissionReview.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/forms/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { Input } from '@/components/ui/forms/input';
import { Textarea } from '@/components/ui/forms/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/forms/select';
import { useToast } from '@/components/ui/hooks/use-toast';
import { CheckCircle, XCircle, AlertCircle, Eye, Download, Send } from 'lucide-react';

interface SubmissionFile {
  name: string;
  url: string;
  type: string;
}

interface Submission {
  id: string;
  files: SubmissionFile[];
  notes?: string;
  status: 'SUBMITTED' | 'IN_REVIEW' | 'APPROVED' | 'NEEDS_REVISION' | 'REJECTED';
  createdAt: Date;
  student: {
    id: string;
    name: string;
    email: string;
  };
  grade?: number;
  feedback?: string;
  milestoneId?: string;
}

interface SubmissionReviewProps {
  courseId: string;
  lessonId: string;
  submission: Submission;
  onReviewComplete?: () => void;
}

export function SubmissionReview({
  courseId,
  lessonId,
  submission,
  onReviewComplete
}: SubmissionReviewProps) {
  const [feedback, setFeedback] = React.useState(submission.feedback || '');
  const [grade, setGrade] = React.useState(submission.grade?.toString() || '');
  const [status, setStatus] = React.useState(submission.status);
  const [privateNotes, setPrivateNotes] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  const submitReview = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `/api/courses/${courseId}/lessons/${lessonId}/submissions/${submission.id}/feedback`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            comment: feedback,
            grade: grade ? parseInt(grade) : undefined,
            status,
            privateNotes
          })
        }
      );

      if (!response.ok) throw new Error('Failed to submit review');

      toast({
        title: 'Review submitted',
        description: 'The feedback has been sent to the student.',
      });

      onReviewComplete?.();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit review. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusColor = (status: Submission['status']) => {
    switch (status) {
      case 'APPROVED':
        return 'text-green-500';
      case 'NEEDS_REVISION':
        return 'text-yellow-500';
      case 'REJECTED':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const renderStatusIcon = (status: Submission['status']) => {
    switch (status) {
      case 'APPROVED':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'NEEDS_REVISION':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'REJECTED':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Student Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div>
              <span>Submission from {submission.student.name}</span>
              <p className="text-sm text-gray-500">{submission.student.email}</p>
            </div>
            <div className="flex items-center gap-2">
              {renderStatusIcon(status)}
              <span className={getStatusColor(status)}>{status}</span>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Review Tabs */}
      <Tabs defaultValue="submission">
        <TabsList>
          <TabsTrigger value="submission">Submission</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
        </TabsList>

        <TabsContent value="submission">
          <Card>
            <CardContent className="p-6 space-y-6">
              {/* Submitted Files */}
              <div>
                <h3 className="font-semibold mb-4">Submitted Files</h3>
                <div className="space-y-2">
                  {submission.files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-sm">{file.name}</span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(file.url, '_blank')}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(file.url, '_blank')}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Notes */}
              {submission.notes && (
                <div>
                  <h3 className="font-semibold mb-2">Student Notes</h3>
                  <p className="text-gray-600">{submission.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="review">
          <Card>
            <CardContent className="p-6 space-y-6">
              {/* Grade */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Grade (optional)
                  </label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    placeholder="Enter grade (0-100)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Status
                  </label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="APPROVED">Approved</SelectItem>
                      <SelectItem value="NEEDS_REVISION">Needs Revision</SelectItem>
                      <SelectItem value="REJECTED">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Feedback */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Feedback for Student
                </label>
                <Textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={6}
                  placeholder="Provide detailed feedback for the student..."
                />
              </div>

              {/* Private Notes */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Private Notes
                </label>
                <Textarea
                  value={privateNotes}
                  onChange={(e) => setPrivateNotes(e.target.value)}
                  rows={3}
                  placeholder="Private notes (only visible to instructors)..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button
                  onClick={submitReview}
                  disabled={isSubmitting || !feedback.trim()}
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Feedback
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}