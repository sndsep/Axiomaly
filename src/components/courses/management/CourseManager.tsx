// src/components/courses/management/CourseManager.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/forms/tabs';
import { Button } from '@/components/ui/forms/button';
import { Input } from '@/components/ui/forms/input';
import { Textarea } from '@/components/ui/forms/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/forms/select';
import { useToast } from '@/components/ui/hooks/use-toast';
import { Loader2, Plus, Trash } from 'lucide-react';

const lessonSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  content: z.string().optional(),
  duration: z.number().optional(),
  order: z.number(),
  type: z.enum(['VIDEO', 'TEXT', 'QUIZ', 'ASSIGNMENT', 'PROJECT']),
  videoUrl: z.string().url().optional(),
  quizData: z.any().optional(),
  assignment: z.any().optional(),
});

const courseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
  duration: z.string().optional(),
  price: z.number().min(0).optional(),
  level: z.string(),
  categoryId: z.string().optional(),
  lessons: z.array(lessonSchema)
});

type CourseFormData = z.infer<typeof courseSchema>;
type LessonFormData = z.infer<typeof lessonSchema>;

const LESSON_TYPES = [
  { value: 'VIDEO', label: 'Video Lesson' },
  { value: 'TEXT', label: 'Text Content' },
  { value: 'QUIZ', label: 'Quiz' },
  { value: 'ASSIGNMENT', label: 'Assignment' },
  { value: 'PROJECT', label: 'Project' }
] as const;

const COURSE_LEVELS = [
  { value: 'BEGINNER', label: 'Beginner' },
  { value: 'INTERMEDIATE', label: 'Intermediate' },
  { value: 'ADVANCED', label: 'Advanced' }
] as const;

interface LessonFormProps {
  index: number;
  register: any;
  watch: any;
  setValue: any;
  onRemove: () => void;
}

const LessonForm: React.FC<LessonFormProps> = ({
  index,
  register,
  watch,
  setValue,
  onRemove
}) => {
  const lessonType = watch(`lessons.${index}.type`);

  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold">Lesson {index + 1}</h3>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onRemove}
        >
          <Trash className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-4">
        <Input
          {...register(`lessons.${index}.title`)}
          placeholder="Lesson title"
        />

        <Select
          onValueChange={(value) => setValue(`lessons.${index}.type`, value)}
          defaultValue={lessonType}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select lesson type" />
          </SelectTrigger>
          <SelectContent>
            {LESSON_TYPES.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Textarea
          {...register(`lessons.${index}.description`)}
          placeholder="Lesson description"
          rows={2}
        />

        {lessonType === 'VIDEO' && (
          <Input
            {...register(`lessons.${index}.videoUrl`)}
            placeholder="Video URL"
            type="url"
          />
        )}

        {lessonType === 'TEXT' && (
          <Textarea
            {...register(`lessons.${index}.content`)}
            placeholder="Lesson content"
            rows={4}
          />
        )}

        {(lessonType === 'QUIZ' || lessonType === 'ASSIGNMENT' || lessonType === 'PROJECT') && (
          <div className="space-y-4">
            <Textarea
              {...register(`lessons.${index}.content`)}
              placeholder={`${lessonType.toLowerCase()} instructions`}
              rows={4}
            />
          </div>
        )}

        <Input
          type="number"
          {...register(`lessons.${index}.duration`, { valueAsNumber: true })}
          placeholder="Duration (minutes)"
        />
      </div>
    </Card>
  );
};

interface CourseManagerProps {
  courseId?: string;
  initialData?: CourseFormData;
}

export function CourseManager({ courseId, initialData }: CourseManagerProps) {
  const [activeTab, setActiveTab] = React.useState('basic');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: initialData || {
      title: '',
      description: '',
      level: 'BEGINNER',
      lessons: []
    }
  });

  const onSubmit = async (data: CourseFormData) => {
    setIsLoading(true);
    try {
      const url = courseId 
        ? `/api/courses/${courseId}`
        : '/api/courses';
        
      const response = await fetch(url, {
        method: courseId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Failed to save course');

      toast({
        title: "Success",
        description: `Course ${courseId ? 'updated' : 'created'} successfully`
      });

      router.push('/dashboard/courses');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save course",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addLesson = () => {
    const lessons = form.getValues('lessons');
    form.setValue('lessons', [
      ...lessons, 
      { 
        title: '', 
        description: '', 
        type: 'TEXT',
        order: lessons.length,
        content: ''
      }
    ]);
  };

  const removeLesson = (index: number) => {
    const lessons = form.getValues('lessons');
    form.setValue('lessons', 
      lessons.filter((_, i) => i !== index)
        .map((lesson, i) => ({ ...lesson, order: i }))
    );
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label>Title</label>
                  <Input
                    {...form.register("title")}
                    placeholder="Course title"
                  />
                </div>

                <div className="space-y-2">
                  <label>Description</label>
                  <Textarea
                    {...form.register("description")}
                    placeholder="Course description"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label>Level</label>
                    <Select
                      onValueChange={(value) => form.setValue("level", value)}
                      defaultValue={form.getValues("level")}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select course level" />
                      </SelectTrigger>
                      <SelectContent>
                        {COURSE_LEVELS.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label>Price</label>
                    <Input
                      type="number"
                      step="0.01"
                      {...form.register("price", { valueAsNumber: true })}
                      placeholder="Course price"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label>Duration</label>
                  <Input
                    {...form.register("duration")}
                    placeholder="Course duration (e.g., '6 weeks')"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Course Content</span>
                  <Button 
                    type="button"
                    onClick={addLesson}
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Lesson
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {form.watch('lessons')?.map((lesson, index) => (
                    <LessonForm
                      key={index}
                      index={index}
                      register={form.register}
                      watch={form.watch}
                      setValue={form.setValue}
                      onRemove={() => removeLesson(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Course Settings</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Additional settings implementation */}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview">
            <Card>
              <CardHeader>
                <CardTitle>Course Preview</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Course preview implementation */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {courseId ? 'Update Course' : 'Create Course'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CourseManager;