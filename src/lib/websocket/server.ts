// src/lib/websocket/server.ts
import { Server as HTTPServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { getSession } from 'next-auth/react';
import { prisma } from '@/lib/prisma';

export class WebSocketServer {
  private io: SocketIOServer;
  private userSockets: Map<string, string[]> = new Map();

  constructor(server: HTTPServer) {
    this.io = new SocketIOServer(server, {
      path: '/api/ws',
      cors: {
        origin: process.env.NEXT_PUBLIC_APP_URL,
        methods: ['GET', 'POST']
      }
    });

    this.setupMiddleware();
    this.setupEventHandlers();
  }

  private async setupMiddleware() {
    this.io.use(async (socket, next) => {
      try {
        const session = await getSession({ req: socket.request });
        
        if (!session?.user) {
          return next(new Error('Unauthorized'));
        }

        socket.data.userId = session.user.id;
        next();
      } catch (error) {
        next(new Error('Authentication failed'));
      }
    });
  }

  private setupEventHandlers() {
    this.io.on('connection', (socket) => {
      const userId = socket.data.userId;
      
      // Track user sockets
      if (!this.userSockets.has(userId)) {
        this.userSockets.set(userId, []);
      }
      this.userSockets.get(userId)?.push(socket.id);

      // Join user-specific room
      socket.join(`user:${userId}`);

      socket.on('disconnect', () => {
        const userSocketIds = this.userSockets.get(userId) || [];
        this.userSockets.set(
          userId,
          userSocketIds.filter(id => id !== socket.id)
        );
      });

      // Handle course-specific events
      socket.on('join:course', (courseId: string) => {
        socket.join(`course:${courseId}`);
      });

      socket.on('leave:course', (courseId: string) => {
        socket.leave(`course:${courseId}`);
      });
    });
  }

  // Public methods for sending notifications
  public async sendNotification(userId: string, notification: any) {
    try {
      // Save notification to database
      const savedNotification = await prisma.notification.create({
        data: {
          userId,
          ...notification
        }
      });

      // Send to all user's connected sockets
      this.io.to(`user:${userId}`).emit('notification', savedNotification);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }

  public async sendCourseUpdate(courseId: string, update: any) {
    this.io.to(`course:${courseId}`).emit('course:update', update);
  }

  public async sendLessonUpdate(courseId: string, lessonId: string, update: any) {
    this.io.to(`course:${courseId}`).emit('lesson:update', { lessonId, ...update });
  }
}