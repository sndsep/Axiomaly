// src/components/dashboard/calendar/Calendar.tsx
'use client';

import { useState } from 'react'
import { CalendarIcon } from "lucide-react"
import { Card } from "@/components/ui/forms/card"
import { Calendar as CalendarComponent } from "@/components/ui/forms/calendar"
import { format } from "date-fns"
import type { CalendarEvent } from "@/types/calendar"

interface CalendarProps {
  events: CalendarEvent[];
}

export function Calendar({ events }: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Group events by date
  const eventsByDate = events.reduce((acc, event) => {
    const dateKey = format(event.date, 'yyyy-MM-dd');
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {} as Record<string, CalendarEvent[]>);

  // Get selected date's events
  const selectedDateEvents = selectedDate
    ? eventsByDate[format(selectedDate, 'yyyy-MM-dd')] || []
    : [];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Calendar</h2>
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600">
            {format(selectedDate || new Date(), "MMMM d'th', yyyy")}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-[2fr,1fr] gap-6">
        <CalendarComponent
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
          modifiers={{
            hasEvent: (date) => {
              const dateKey = format(date, 'yyyy-MM-dd');
              return !!eventsByDate[dateKey]?.length;
            }
          }}
          modifiersStyles={{
            hasEvent: {
              color: 'var(--primary)',
              fontWeight: 'bold',
              textDecoration: 'underline'
            }
          }}
        />

        <div className="space-y-4">
          <h3 className="font-medium text-gray-500">
            {selectedDateEvents.length 
              ? `Events for ${format(selectedDate!, 'MMMM d, yyyy')}`
              : 'No events for this date'}
          </h3>
          
          {selectedDateEvents.map((event) => (
            <div
              key={event.id}
              className={`p-3 rounded-lg border ${
                event.type === 'assignment' 
                  ? 'bg-blue-50 border-blue-200'
                  : 'bg-green-50 border-green-200'
              }`}
            >
              <p className="font-medium">{event.title}</p>
              <p className="text-sm text-gray-600">
                {format(event.date, 'h:mm a')}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}