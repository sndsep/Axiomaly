// src/components/shared/notifications/NotificationCenter.tsx
'use client'

import React from 'react'
import { useNotifications } from '@/hooks/use-notifications'
import { 
  Bell, 
  Check,
  CheckCircle,
  GraduationCap,
  MessageCircle,
  X,
  Settings,
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/forms/button'
import { ScrollArea } from '@/components/ui/forms/scroll-area'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/forms/popover'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/forms/sheet'
import { Badge } from '@/components/ui/forms/badge'
import { NotificationType } from '@/types/notifications'

export function NotificationCenter() {
  const { 
    notifications,
    unreadCount,
    loading,
    markAsRead,
    markAllAsRead
  } = useNotifications({
    pollingInterval: 30000, // Poll every 30 seconds
  })

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case 'GRADE':
        return <GraduationCap className="h-5 w-5" />
      case 'FEEDBACK':
        return <MessageCircle className="h-5 w-5" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  const getNotificationColor = (type: NotificationType) => {
    switch (type) {
      case 'GRADE':
        return 'bg-green-100 text-green-600'
      case 'FEEDBACK':
        return 'bg-blue-100 text-blue-600'
      case 'ASSIGNMENT':
        return 'bg-purple-100 text-purple-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative"
          aria-label="Open notifications"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      
      <PopoverContent 
        className="w-80 p-0"
        align="end"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">Notifications</h3>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="text-xs"
            >
              Mark all as read
            </Button>
          )}
        </div>

        <ScrollArea className="h-[400px]">
          {loading ? (
            <div className="flex items-center justify-center h-32">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-muted-foreground">
              <Bell className="h-8 w-8 mb-2" />
              <p>No notifications</p>
            </div>
          ) : (
            <div className="divide-y">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 ${!notification.read ? 'bg-primary/5' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${getNotificationColor(notification.type)}`}>
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-medium line-clamp-2">
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="shrink-0"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(notification.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        <div className="p-4 border-t">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="w-full">
                <Settings className="h-4 w-4 mr-2" />
                Notification Settings
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Notification Preferences</SheetTitle>
              </SheetHeader>
              {/* Add notification preferences form here */}
            </SheetContent>
          </Sheet>
        </div>
      </PopoverContent>
    </Popover>
  )
}