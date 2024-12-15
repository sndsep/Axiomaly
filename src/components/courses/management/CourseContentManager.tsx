// src/components/courses/management/CourseContentManager.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

// Content types and validation
const moduleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  order: z.number(),
  lessons: z.array(z.object({
    title: z.string().min(1, "Lesson title is required"),
    content: z.string().min(1, "Content is required"),
    duration: z.number().min(1, "Duration is required"),
    resources: z.array(z.object({
      title: z.string(),
      type: z.enum(['VIDEO', 'PDF', 'LINK', 'CODE']),
      url: z.string().url()
    }))
  }))
});

type ModuleData = z.infer<typeof moduleSchema>;

export function CourseContentManager({ courseId }: { courseId: string }) {
  const [activeTab, setActiveTab] = React.useState('structure');
  const [modules, setModules] = React.useState<ModuleData[]>([]);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<ModuleData>({
    resolver: zodResolver(moduleSchema),
    defaultValues: {
      title: '',
      description: '',
      order: modules.length + 1,
      lessons: []
    }
  });

  // Load existing content
  React.useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`/api/courses/${courseId}/content`);
        if (response.ok) {
          const data = await response.json();
          setModules(data.modules);
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load course content",
          variant: "destructive"
        });
      }
    };

    loadContent();
  }, [courseId]);

  const onSubmit = async (data: ModuleData) => {
    try {
      const response = await fetch(`/api/courses/${courseId}/content/modules`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error("Failed to save module");

      toast({
        title: "Success",
        description: "Module saved successfully"
      });

      // Refresh modules list
      const updatedResponse = await fetch(`/api/courses/${courseId}/content`);
      const updatedData = await updatedResponse.json();
      setModules(updatedData.modules);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save module",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="structure">Course Structure</TabsTrigger>
          <TabsTrigger value="content">Content Editor</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="structure">
          <Card>
            <CardHeader>
              <CardTitle>Course Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Existing Modules List */}
                {modules.map((module, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{module.title}</h3>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Delete</Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{module.description}</p>
                    {/* Lessons List */}
                    <div className="mt-4 pl-4">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center space-x-2 py-2">
                          <div className="w-4 h-4 rounded-full bg-gray-200" />
                          <span>{lesson.title}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}

                {/* Add New Module Form */}
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <Input
                    placeholder="Module Title"
                    {...form.register("title")}
                  />
                  <Textarea
                    placeholder="Module Description"
                    {...form.register("description")}
                  />
                  <Button type="submit">Add Module</Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          {/* Content Editor Implementation */}
        </TabsContent>

        <TabsContent value="resources">
          {/* Resources Management */}
        </TabsContent>

        <TabsContent value="preview">
          {/* Course Preview */}
        </TabsContent>
      </Tabs>
    </div>
  );
}