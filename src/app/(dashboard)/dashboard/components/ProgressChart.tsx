// src/app/(dashboard)/dashboard/components/ProgressChart.tsx
"use client"

import { useState } from 'react'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts'
import { Select } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

type TimeRange = 'week' | 'month' | 'year'

interface ProgressData {
  date: string
  completed: number
  time: number
}

const timeRangeOptions = [
  { value: "week", label: "Last week" },
  { value: "month", label: "Last month" },
  { value: "year", label: "Last year" }
]

function generateProgressData(range: TimeRange): ProgressData[] {
  const data: ProgressData[] = []
  const currentDate = new Date()
  let days: number

  switch (range) {
    case 'week':
      days = 7
      break
    case 'month':
      days = 30
      break
    case 'year':
      days = 12 // We use months instead of days for the year
      break
    default:
      days = 7
  }

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(currentDate)
    if (range === 'year') {
      date.setMonth(date.getMonth() - i)
    } else {
      date.setDate(date.getDate() - i)
    }
    
    data.push({
      date: range === 'year'
        ? date.toLocaleDateString('en-US', { month: 'short' })
        : date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' }),
      completed: Math.floor(Math.random() * 40) + 60, // Number between 60-100
      time: Math.floor(Math.random() * 120) + 30 // Minutes between 30-150
    })
  }
  
  return data
}

export function ProgressChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>('week')
  const data = generateProgressData(timeRange)

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Learning Progress</h3>
        <Select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value as TimeRange)}
          options={timeRangeOptions}
          placeholder="Select period"
          className="w-[180px]"
        />
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="date" 
              className="text-xs"
            />
            <YAxis 
              yAxisId="left"
              className="text-xs"
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              className="text-xs"
              tickFormatter={(value) => `${value}m`}
            />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-3 shadow-md">
                      <p className="text-sm font-medium mb-1">{label}</p>
                      <p className="text-sm text-muted-foreground">
                        Completed: {payload[0].value}%
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Time: {payload[1].value} minutes
                      </p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="completed"
              name="Completed"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{ fill: '#2563eb' }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="time"
              name="Time (min)"
              stroke="#16a34a"
              strokeWidth={2}
              dot={{ fill: '#16a34a' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
