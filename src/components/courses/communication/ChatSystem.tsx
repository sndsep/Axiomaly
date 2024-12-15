// src/components/courses/communication/ChatSystem.tsx
'use client'

import React from 'react'
import { Send, Loader2, User } from 'lucide-react'
import { useToast } from '@/components/ui/hooks/use-toast'
import { Button } from '@/components/ui/forms/button'
import { Input } from '@/components/ui/forms/input'
import { Avatar } from '@/components/ui/forms/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/forms/card'
import { ScrollArea } from '@/components/ui/forms/scroll-area'

interface Message {
  id: string
  content: string
  senderId: string
  senderName: string
  senderRole: 'student' | 'instructor'
  timestamp: Date
}

interface ChatSystemProps {
  courseId: string
  userId: string
  userRole: 'student' | 'instructor'
}

export function ChatSystem({ courseId, userId, userRole }: ChatSystemProps) {
  const [messages, setMessages] = React.useState<Message[]>([])
  const [newMessage, setNewMessage] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // WebSocket connection
  const wsRef = React.useRef<WebSocket | null>(null)

  React.useEffect(() => {
    // Initialize WebSocket connection
    wsRef.current = new WebSocket(
      `${process.env.NEXT_PUBLIC_WS_URL}/chat?courseId=${courseId}&userId=${userId}`
    )

    wsRef.current.onmessage = (event) => {
      const message = JSON.parse(event.data)
      setMessages(prev => [...prev, message])
      scrollToBottom()
    }

    wsRef.current.onerror = (error) => {
      toast({
        title: "Connection Error",
        description: "Failed to connect to chat. Please try again.",
        variant: "destructive",
      })
    }

    // Load previous messages
    loadMessages()

    return () => {
      wsRef.current?.close()
    }
  }, [courseId, userId])

  const loadMessages = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/courses/${courseId}/messages`)
      const data = await response.json()
      setMessages(data)
      scrollToBottom()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load messages",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  const sendMessage = async () => {
    if (!newMessage.trim()) return

    try {
      const message = {
        content: newMessage,
        senderId: userId,
        timestamp: new Date(),
      }

      wsRef.current?.send(JSON.stringify(message))
      setNewMessage('')
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      })
    }
  }

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date))
  }

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="border-b">
        <CardTitle className="text-lg font-semibold">
          Course Chat
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea 
          ref={scrollRef}
          className="flex-1 p-4"
        >
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.senderId === userId ? 'flex-row-reverse' : ''
                  }`}
                >
                  <Avatar>
                    <User className="h-5 w-5" />
                  </Avatar>
                  
                  <div className={`flex flex-col max-w-[70%] ${
                    message.senderId === userId ? 'items-end' : ''
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">
                        {message.senderName}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                    
                    <div className={`rounded-lg px-4 py-2 ${
                      message.senderId === userId
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}>
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        <div className="border-t p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage()
            }}
            className="flex gap-2"
          >
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" disabled={!newMessage.trim() || isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}