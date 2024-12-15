// src/lib/websocket/NotificationsWebSocketServer.ts
import { Server as HTTPServer } from 'http'
import { Server as WebSocketServer } from 'ws'
import { parse } from 'url'
import { getToken } from 'next-auth/jwt'
import { prisma } from '@/lib/prisma'
import { Notification } from '@prisma/client'

interface WebSocketClient extends WebSocket {
  userId?: string
  isAlive?: boolean
}

export class NotificationsWebSocketServer {
  private wss: WebSocketServer
  private clients: Map<string, Set<WebSocketClient>>

  constructor(server: HTTPServer) {
    this.wss = new WebSocketServer({ noServer: true })
    this.clients = new Map()

    server.on('upgrade', async (request, socket, head) => {
      try {
        // Verify the user is authenticated
        const token = await getToken({ req: request })
        if (!token?.sub) {
          socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n')
          socket.destroy()
          return
        }

        const pathname = parse(request.url || '').pathname

        if (pathname === '/api/ws/notifications') {
          this.wss.handleUpgrade(request, socket, head, (ws) => {
            const wsClient = ws as WebSocketClient
            wsClient.userId = token.sub
            wsClient.isAlive = true
            this.wss.emit('connection', wsClient)
          })
        }
      } catch (error) {
        console.error('WebSocket upgrade error:', error)
        socket.write('HTTP/1.1 500 Internal Server Error\r\n\r\n')
        socket.destroy()
      }
    })

    this.setupWSServer()
    this.setupHeartbeat()
  }

  private setupWSServer() {
    this.wss.on('connection', (ws: WebSocketClient) => {
      const userId = ws.userId
      if (!userId) return

      // Add client to clients map
      if (!this.clients.has(userId)) {
        this.clients.set(userId, new Set())
      }
      this.clients.get(userId)?.add(ws)

      // Setup ping-pong
      ws.on('pong', () => {
        ws.isAlive = true
      })

      // Handle client disconnect
      ws.on('close', () => {
        this.clients.get(userId)?.delete(ws)
        if (this.clients.get(userId)?.size === 0) {
          this.clients.delete(userId)
        }
      })
    })
  }

  private setupHeartbeat() {
    setInterval(() => {
      this.wss.clients.forEach((ws: WebSocketClient) => {
        if (ws.isAlive === false) {
          return ws.terminate()
        }

        ws.isAlive = false
        ws.ping()
      })
    }, 30000) // Check every 30 seconds
  }

  public async sendNotification(notification: Notification) {
    try {
      const recipientConnections = this.clients.get(notification.userId)
      if (!recipientConnections) return

      // Enhance notification with related data if needed
      const enhancedNotification = await this.enhanceNotification(notification)
      const notificationData = JSON.stringify(enhancedNotification)

      recipientConnections.forEach(client => {
        if (client.readyState === client.OPEN) {
          client.send(notificationData)
        }
      })

    } catch (error) {
      console.error('Error sending notification:', error)
    }
  }

  private async enhanceNotification(notification: Notification) {
    // Add related data based on notification type
    switch (notification.type) {
      case 'GRADE':
        return await prisma.notification.findUnique({
          where: { id: notification.id },
          include: {
            course: {
              select: {
                id: true,
                title: true
              }
            },
            assignment: {
              select: {
                id: true,
                title: true
              }
            }
          }
        })
      default:
        return notification
    }
  }

  public broadcast(message: any, filter?: (userId: string) => boolean) {
    const messageStr = JSON.stringify(message)

    this.clients.forEach((connections, userId) => {
      if (filter && !filter(userId)) return

      connections.forEach(client => {
        if (client.readyState === client.OPEN) {
          client.send(messageStr)
        }
      })
    })
  }

  public sendToUser(userId: string, message: any) {
    const connections = this.clients.get(userId)
    if (!connections) return

    const messageStr = JSON.stringify(message)
    connections.forEach(client => {
      if (client.readyState === client.OPEN) {
        client.send(messageStr)
      }
    })
  }
}

// Export singleton instance
export const notificationsWS = new NotificationsWebSocketServer(server)