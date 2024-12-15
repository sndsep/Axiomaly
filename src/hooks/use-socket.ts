// src/hooks/use-socket.ts
import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { useSession } from 'next-auth/react';

export function useSocket(courseId?: string) {
  const { data: session } = useSession();
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!session?.user) return;

    // Initialize socket connection
    socketRef.current = io({
      path: '/api/ws',
      auth: {
        token: session.accessToken
      }
    });

    const socket = socketRef.current;

    socket.on('connect', () => {
      console.log('Socket connected');
      
      // Join course room if courseId is provided
      if (courseId) {
        socket.emit('join:course', courseId);
      }
    });

    socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    return () => {
      // Leave course room if necessary
      if (courseId) {
        socket.emit('leave:course', courseId);
      }
      socket.disconnect();
    };
  }, [session, courseId]);

  return socketRef.current;
}

// Hook for handling real-time updates in a course
export function useCourseSocket(courseId: string) {
  const socket = useSocket(courseId);
  
  useEffect(() => {
    if (!socket) return;

    // Setup course-specific event handlers
    const handleCourseUpdate = (update: any) => {
      // Handle course updates
      console.log('Course update:', update);
    };

    const handleLessonUpdate = (update: any) => {
      // Handle lesson updates
      console.log('Lesson update:', update);
    };

    socket.on('course:update', handleCourseUpdate);
    socket.on('lesson:update', handleLessonUpdate);

    return () => {
      socket.off('course:update', handleCourseUpdate);
      socket.off('lesson:update', handleLessonUpdate);
    };
  }, [socket, courseId]);

  return socket;
}