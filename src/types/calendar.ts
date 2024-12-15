// src/types/calendar.ts
export type CalendarEventType = 'assignment' | 'live-session' | 'deadline';

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: CalendarEventType;
  courseId: string;
}

export interface DayWithEvents {
  date: Date;
  events: CalendarEvent[];
}