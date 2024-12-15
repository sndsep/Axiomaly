// src/hooks/use-notifications.ts
import { useState, useEffect } from 'react'
import { Notification, NotificationPreferences } from '@/types/notifications'
import { useToast } from '@/components/ui/hooks/use-toast'

interface UseNotificationsOptions {
  onNewNotification?: (notification: Notification) => void
  pollingInterval?: number
}

export function useNotifications(options: UseNotificationsOptions = {}) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/notifications')
      if (!response.ok) throw new Error('Failed to fetch notifications')
      
      const data = await response.json()
      setNotifications(data.notifications)
      setUnreadCount(data.unreadCount)
      setError(null)
    } catch (err) {
      setError('Failed to load notifications')
      console.error('Error fetching notifications:', err)
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (notificationId: string) => {
    try {
      const response = await fetch(`/api/notifications/${notificationId}/read`, {
        method: 'POST'
      })
      
      if (!response.ok) throw new Error('Failed to mark notification as read')

      setNotifications(prev => 
        prev.map(notification => 
          notification.id === notificationId
            ? { ...notification, read: true }
            : notification
        )
      )
      setUnreadCount(prev => Math.max(0, prev - 1))
    } catch (err) {
      console.error('Error marking notification as read:', err)
      toast({
        title: "Error",
        description: "Failed to mark notification as read",
        variant: "destructive"
      })
    }
  }

  const markAllAsRead = async () => {
    try {
      const response = await fetch('/api/notifications/read-all', {
        method: 'POST'
      })
      
      if (!response.ok) throw new Error('Failed to mark all notifications as read')

      setNotifications(prev =>
        prev.map(notification => ({ ...notification, read: true }))
      )
      setUnreadCount(0)
    } catch (err) {
      console.error('Error marking all notifications as read:', err)
      toast({
        title: "Error",
        description: "Failed to mark all notifications as read",
        variant: "destructive"
      })
    }
  }

  const updatePreferences = async (preferences: Partial<NotificationPreferences>) => {
    try {
      const response = await fetch('/api/notifications/preferences', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences)
      })

      if (!response.ok) throw new Error('Failed to update preferences')

      toast({
        title: "Success",
        description: "Notification preferences updated"
      })
    } catch (err) {
      console.error('Error updating preferences:', err)
      toast({
        title: "Error",
        description: "Failed to update notification preferences",
        variant: "destructive"
      })
    }
  }

  // Poll for new notifications
  useEffect(() => {
    fetchNotifications()
    
    if (options.pollingInterval) {
      const interval = setInterval(fetchNotifications, options.pollingInterval)
      return () => clearInterval(interval)
    }
  }, [options.pollingInterval])

  // Handle new notifications
  useEffect(() => {
    const handleNewNotification = (notification: Notification) => {
      setNotifications(prev => [notification, ...prev])
      setUnreadCount(prev => prev + 1)
      
      options.onNewNotification?.(notification)

      // Show toast for important notifications
      if (['GRADE', 'FEEDBACK'].includes(notification.type)) {
        toast({
          title: notification.title,
          description: notification.message,
        })
      }
    }

    // Setup WebSocket connection for real-time notifications
    const ws = new WebSocket(`${process.env.NEXT_PUBLIC_WS_URL}/notifications`)
    
    ws.onmessage = (event) => {
      const notification = JSON.parse(event.data)
      handleNewNotification(notification)
    }

    return () => ws.close()
  }, [options.onNewNotification, toast])

  return {
    notifications,
    unreadCount,
    loading,
    error,
    markAsRead,
    markAllAsRead,
    updatePreferences,
    refresh: fetchNotifications
  }
}