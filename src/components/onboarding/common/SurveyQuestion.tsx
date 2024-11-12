// src/components/onboarding/common/SurveyQuestion.tsx
import { FC } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/forms/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/forms/radio-group';
import { Checkbox } from '@/components/ui/forms/checkbox';
import { Input } from '@/components/ui/forms/input';
import { Textarea } from '@/components/ui/forms/textarea';
import { Slider } from '@/components/ui/forms/slider';
import { UseFormReturn } from 'react-hook-form';
import { cn } from '@/lib/utils';

interface Option {
  id: string;
  label: string;
  description?: string;
}

interface BaseQuestionProps {
  id: string;
  label: string;
  description?: string;
  required?: boolean;
  form: UseFormReturn<any>;
  className?: string;
}

interface SingleChoiceQuestionProps extends BaseQuestionProps {
  type: 'single';
  options: Option[];
  layout?: 'vertical' | 'horizontal';
}

interface MultipleChoiceQuestionProps extends BaseQuestionProps {
  type: 'multiple';
  options: Option[];
  minSelect?: number;
  maxSelect?: number;
}

interface ScaleQuestionProps extends BaseQuestionProps {
  type: 'scale';
  min: number;
  max: number;
  step: number;
  markers?: Array<{ value: number; label: string }>;
}

interface TextQuestionProps extends BaseQuestionProps {
  type: 'text';
  multiline?: boolean;
  placeholder?: string;
}

type SurveyQuestionProps =
  | SingleChoiceQuestionProps
  | MultipleChoiceQuestionProps
  | ScaleQuestionProps
  | TextQuestionProps;

export const SurveyQuestion: FC<SurveyQuestionProps> = (props) => {
  const { id, label, description, required, form, className } = props;

  const renderQuestion = () => {
    switch (props.type) {
      case 'single':
        return (
          <FormField
            control={form.control}
            name={id}
            render={({ field }) => (
              <FormItem className={className}>
                <FormLabel>{label}{required && ' *'}</FormLabel>
                {description && <FormDescription>{description}</FormDescription>}
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className={cn(
                      'grid gap-4',
                      props.layout === 'horizontal' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1'
                    )}
                  >
                    {props.options.map((option) => (
                      <FormItem key={option.id} className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value={option.id}
                            id={`${id}-${option.id}`}
                            className="peer sr-only"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor={`${id}-${option.id}`}
                          className="flex flex-col flex-grow p-4 border-2 rounded-md cursor-pointer hover:bg-gray-50 peer-data-[state=checked]:border-primary"
                        >
                          <span className="font-medium">{option.label}</span>
                          {option.description && (
                            <span className="text-sm text-gray-500">{option.description}</span>
                          )}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case 'multiple':
        return (
          <FormField
            control={form.control}
            name={id}
            render={({ field }) => (
              <FormItem className={className}>
                <FormLabel>{label}{required && ' *'}</FormLabel>
                {description && <FormDescription>{description}</FormDescription>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {props.options.map((option) => (
                    <FormField
                      key={option.id}
                      control={form.control}
                      name={id}
                      render={({ field }) => (
                        <FormItem
                          key={option.id}
                          className="flex items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                const value = checked
                                  ? [...(field.value || []), option.id]
                                  : field.value?.filter((value: string) => value !== option.id);
                                field.onChange(value);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal leading-snug">
                            {option.label}
                            {option.description && (
                              <span className="block text-gray-500 text-xs">
                                {option.description}
                              </span>
                            )}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case 'scale':
        return (
          <FormField
            control={form.control}
            name={id}
            render={({ field }) => (
              <FormItem className={className}>
                <FormLabel>{label}{required && ' *'}</FormLabel>
                {description && <FormDescription>{description}</FormDescription>}
                <FormControl>
                  <div className="space-y-4">
                    <Slider
                      min={props.min}
                      max={props.max}
                      step={props.step}
                      value={[field.value]}
                      onValueChange={([value]) => field.onChange(value)}
                    />
                    {props.markers && (
                      <div className="flex justify-between text-sm text-gray-500">
                        {props.markers.map((marker) => (
                          <span key={marker.value}>{marker.label}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );

      case 'text':
        return (
          <FormField
            control={form.control}
            name={id}
            render={({ field }) => (
              <FormItem className={className}>
                <FormLabel>{label}{required && ' *'}</FormLabel>
                {description && <FormDescription>{description}</FormDescription>}
                <FormControl>
                  {props.multiline ? (
                    <Textarea
                      {...field}
                      placeholder={props.placeholder}
                      className="resize-none"
                      rows={4}
                    />
                  ) : (
                    <Input {...field} placeholder={props.placeholder} />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
    }
  };

  return renderQuestion();
};