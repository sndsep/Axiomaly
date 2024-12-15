// src/components/courses/assignments/AssignmentReviewPanel.tsx
'use client'

import React from 'react'
import { useToast } from '@/components/ui/hooks/use-toast'
import { Button } from '@/components/ui/forms/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card'
import { Textarea } from '@/components/ui/forms/textarea'
import { Input } from '@/components/ui/forms/input'
import { Label } from '@/components/ui/forms/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs'
import { ScrollArea } from '@/components/ui/forms/scroll-area'
import { 
  Download,
  FileText,
  MessageSquare,
  Star,
  Clock,
  Loader2
} from 'lucide-react'

interface ReviewPanelProps {
  assignmentId: string
  courseId: string
}

interface Submission {
  id: string
  fileUrl: string
  fileName: string
  submittedAt: Date
  status: string
  grade?: number
  feedback?: string
  studentName: string
}

export function AssignmentReviewPanel({
  assignmentId,
  courseId
}: ReviewPanelProps) {
  const [submissions, setSubmissions] = React.useState<Submission[]>([])
  const [loading, setLoading] = React.useState(true)
  const [selectedSubmission, setSelectedSubmission] = React.useState<Submission | null>(null)
  const [feedback, setFeedback] = React.useState('')
  const [grade, setGrade] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const { toast } = useToast()

  React.useEffect(() => {
    loadSubmissions()
  }, [assignmentId])

  const loadSubmissions = async () => {
    try {
      const response = await fetch(
        `/api/assignments/${assignmentId}/submissions`
      )
      if (!response.ok) throw new Error('Failed to load submissions')
      
      const data = await response.json()
      setSubmissions(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load submissions",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const handleGradeSubmission = async () => {
    if (!selectedSubmission) return
    
    setIsSubmitting(true)
    try {
      const response = await fetch(
        `/api/assignments/${assignmentId}/submissions/${selectedSubmission.id}/grade`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            grade: parseFloat(grade),
            feedback,
          })
        }
      )

      if (!response.ok) throw new Error('Failed to grade submission')

      toast({
        title: "Success",
        description: "Submission graded successfully"
      })

      // Refresh submissions
      await loadSubmissions()
      setSelectedSubmission(null)
      setFeedback('')
      setGrade('')

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to grade submission",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Submissions List */}
      <div className="col-span-4">
        <Card>
          <CardHeader>
            <CardTitle>Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-4">
                {submissions.map((submission) => (
                  <div
                    key={submission.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors
                      ${selectedSubmission?.id === submission.id
                        ? 'border-primary bg-primary/5'
                        : 'hover:border-primary/50'
                      }`}
                    onClick={() => setSelectedSubmission(submission)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{submission.studentName}</h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(submission.submittedAt).toLocaleDateString()}
                        </p>
                      </div>
                      {submission.grade && (
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span>{submission.grade}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Review Panel */}
      <div className="col-span-8">
        {selectedSubmission ? (
          <Card>
            <CardHeader>
              <CardTitle>Review Submission</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="submission">
                <TabsList>
                  <TabsTrigger value="submission">Submission</TabsTrigger>
                  <TabsTrigger value="feedback">Feedback</TabsTrigger>
                </TabsList>

                <TabsContent value="submission" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{selectedSubmission.fileName}</h3>
                      <p className="text-sm text-muted-foreground">
                        Submitted {new Date(selectedSubmission.submittedAt).toLocaleString()}
                      </p>
                    </div>
                    <Button variant="outline" asChild>
                      <a href={selectedSubmission.fileUrl} download>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>

                  {/* File Preview (if supported) */}
                  <div className="border rounded-lg p-4 min-h-[300px]">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto" />
                  </div>
                </TabsContent>

                <TabsContent value="feedback" className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="grade">Grade</Label>
                      <Input
                        id="grade"
                        type="number"
                        min="0"
                        max="100"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        placeholder="Enter grade (0-100)"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="feedback">Feedback</Label>
                      <Textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Provide feedback to the student..."
                        rows={6}
                      />
                    </div>

                    <Button
                      className="w-full"
                      onClick={handleGradeSubmission}
                      disabled={isSubmitting || !grade || !feedback}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Grade and Feedback'
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">
              Select a submission to review
            </p>
          </div>
        )}
      </div>
    </div>
  )
}