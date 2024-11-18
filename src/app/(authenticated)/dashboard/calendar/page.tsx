import React from 'react';
import Calendar from '@/components/dashboard/Calendar'; // Adjust the path as necessary

const CalendarPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Calendario</h1>
      <Calendar />
    </div>
  );
};

export default CalendarPage;