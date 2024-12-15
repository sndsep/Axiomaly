// src/components/courses/instructor/SubmissionsList.tsx
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { Input } from '@/components/ui/forms/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/forms/select';
import { Button } from '@/components/ui/forms/button';
import { Search, Filter } from 'lucide-react';
import { SubmissionReview } from './SubmissionReview';
import type { Submission } from '@/types/courses';

interface SubmissionsListProps {
  courseId: string;
  lessonId: string;
}

export function SubmissionsList({ courseId, lessonId }: SubmissionsListProps) {
  const [submissions, setSubmissions] = React.useState<Submission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = React.useState<Submission | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filter, setFilter] = React.useState('PENDING');
  const [search, setSearch] = React.useState('');

  const fetchSubmissions = async () => {
    try {
      const response = await fetch(
        `/api/courses/${courseId}/lessons/${lessonId}/submissions?filter=${filter}&search=${search}`
      );
      if (!response.ok) throw new Error('Failed to fetch submissions');
      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchSubmissions();
  }, [courseId, lessonId, filter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSubmissions();
  };

  if (selectedSubmission) {
    return (
      <div>
        <Button
          variant="ghost"
          onClick={() => setSelectedSubmission(null)}
          className="mb-4"
        >
          ← Back to Submissions
        </Button>

        <SubmissionReview
          courseId={courseId}
          lessonId={lessonId}
          submission={selectedSubmission}
          onReviewComplete={() => {
            setSelectedSubmission(null);
            fetchSubmissions();
          }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by student name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </form>

            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PENDING">Pending Review</SelectItem>
                <SelectItem value="APPROVED">Approved</SelectItem>
                <SelectItem value="NEEDS_REVISION">Needs Revision</SelectItem>
                <SelectItem value="REJECTED">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submissions List */}
          {isLoading ? (
            <div>Loading submissions...</div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No submissions found
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <Card
                  key={submission.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedSubmission(submission)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{submission.student.name}</h3>
                        <p className="text-sm text-gray-500">
                          Submitted {new Date(submission.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <Button variant="ghost">Review</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}