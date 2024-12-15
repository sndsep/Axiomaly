// src/types/submissions.ts
export interface Submission {
    id: string
    assignmentId: string
    userId: string
    fileUrl: string
    status: SubmissionStatus
    grade?: number
    feedback?: string
    submittedAt: Date
    gradedAt?: Date
  }
  
  export type SubmissionStatus = 
    | 'DRAFT'
    | 'SUBMITTED'
    | 'GRADING'
    | 'GRADED'
    | 'RETURNED'
  
  export interface AssignmentFile {
    name: string
    size: number
    type: string
    url: string
  }
  
  export interface SubmissionError {
    message: string
    code: string
    field?: string
  }