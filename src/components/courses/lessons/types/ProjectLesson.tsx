// src/components/courses/lessons/types/ProjectLesson.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/forms/button';
import { Card } from '@/components/ui/forms/card';
import { Textarea } from '@/components/ui/forms/textarea';
import { Input } from '@/components/ui/forms/input';
import { Progress } from '@/components/ui/forms/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs';
import { 
  Upload, 
  CheckCircle, 
  FileText, 
  Link as LinkIcon,
  Clock,
  Target
} from 'lucide-react';
import { useToast } from '@/components/ui/hooks/use-toast';

interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  requiredFiles?: string[];
  completed: boolean;
}

interface ProjectResource {
  title: string;
  type: 'file' | 'link';
  url: string;
  description?: string;
}

interface Project {
  title: string;
  description: string;
  objectives: string[];
  deadline?: string;
  milestones: ProjectMilestone[];
  resources: ProjectResource[];
  maxFileSize?: number;
  allowedFileTypes?: string[];
}

interface ProjectLessonProps {
  project: Project;
  onComplete: () => void;
  isCompleted: boolean;
}

export function ProjectLesson({
  project,
  onComplete,
  isCompleted
}: ProjectLessonProps) {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [currentMilestone, setCurrentMilestone] = React.useState<string>(
    project.milestones[0]?.id
  );
  const [files, setFiles] = React.useState<Record<string, File[]>>({});
  const [notes, setNotes] = React.useState<Record<string, string>>({});
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  const overallProgress = React.useMemo(() => {
    const completed = project.milestones.filter(m => m.completed).length;
    return (completed / project.milestones.length) * 100;
  }, [project.milestones]);

  const handleFileChange = (milestoneId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    
    // Validate files
    const validFiles = selectedFiles.filter(file => {
      const isValidType = project.allowedFileTypes?.some(type => 
        file.type.startsWith(type)
      ) ?? true;
      
      const isValidSize = file.size <= (project.maxFileSize || 10) * 1024 * 1024;
      
      return isValidType && isValidSize;
    });

    if (validFiles.length !== selectedFiles.length) {
      toast({
        title: "Invalid files",
        description: "Some files were rejected due to type or size restrictions",
        variant: "destructive",
      });
    }

    setFiles(prev => ({
      ...prev,
      [milestoneId]: validFiles
    }));
  };

  const handleMilestoneSubmit = async (milestoneId: string) => {
    if (!files[milestoneId]?.length) {
      toast({
        title: "No files selected",
        description: "Please upload your milestone files",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate file upload with progress
      for (let i = 0; i <= 100; i += 10) {
        setUploadProgress(i);
        await new Promise(r => setTimeout(r, 200));
      }

      // Here you would actually upload the files
      // const formData = new FormData();
      // files[milestoneId].forEach(file => formData.append('files', file));
      // formData.append('notes', notes[milestoneId] || '');
      // await submitMilestone(milestoneId, formData);

      // If this was the last milestone, complete the project
      const isLastMilestone = project.milestones[project.milestones.length - 1].id === milestoneId;
      if (isLastMilestone) {
        onComplete();
      }

      toast({
        title: "Success",
        description: "Milestone submitted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit milestone",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Objectives:</h4>
                <ul className="list-disc pl-5">
                  {project.objectives.map((obj, index) => (
                    <li key={index}>{obj}</li>
                  ))}
                </ul>
              </div>

              {project.deadline && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Deadline: {new Date(project.deadline).toLocaleDateString()}</span>
                </div>
              )}
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Overall Progress:</h4>
              <Progress value={overallProgress} className="mb-2" />
              <p className="text-sm text-gray-600">
                {Math.round(overallProgress)}% Complete
              </p>
            </div>
          </TabsContent>

          <TabsContent value="milestones" className="space-y-6">
            {project.milestones.map((milestone) => (
              <Card key={milestone.id} className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{milestone.title}</h4>
                    {milestone.completed && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                  </div>

                  <p className="text-gray-600">{milestone.description}</p>

                  {!milestone.completed && milestone.id === currentMilestone && (
                    <div className="space-y-4 mt-4">
                      <Input
                        type="file"
                        multiple
                        onChange={(e) => handleFileChange(milestone.id, e)}
                        accept={project.allowedFileTypes?.join(',')}
                        disabled={isSubmitting}
                      />

                      <Textarea
                        value={notes[milestone.id] || ''}
                        onChange={(e) => setNotes(prev => ({
                          ...prev,
                          [milestone.id]: e.target.value
                        }))}
                        placeholder="Add notes about this milestone..."
                        disabled={isSubmitting}
                      />

                      <Button
                        onClick={() => handleMilestoneSubmit(milestone.id)}
                        disabled={isSubmitting}
                      >
                        Submit Milestone
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            {project.resources.map((resource, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center gap-4">
                  {resource.type === 'file' ? (
                    <FileText className="w-5 h-5 text-blue-600" />
                  ) : (
                    <LinkIcon className="w-5 h-5 text-blue-600" />
                  )}
                  <div>
                    <h4 className="font-medium">{resource.title}</h4>
                    {resource.description && (
                      <p className="text-sm text-gray-600">{resource.description}</p>
                    )}
                    <a 
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {resource.type === 'file' ? 'Download' : 'Open Link'}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </Card>

      {isCompleted && (
        <div className="flex items-center justify-center gap-2 text-green-600">
          <CheckCircle className="w-5 h-5" />
          <span>Project Completed</span>
        </div>
      )}
    </div>
  );
}