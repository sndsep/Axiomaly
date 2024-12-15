// src/lib/websocket/init.ts
import { WebSocketServer } from './server';
import type { Server as HTTPServer } from 'http';

let wsServer: WebSocketServer | null = null;

export function initializeWebSocket(httpServer: HTTPServer) {
  if (!wsServer) {
    wsServer = new WebSocketServer(httpServer);
  }
  return wsServer;
}

export function getWebSocketServer() {
  if (!wsServer) {
    throw new Error('WebSocket server not initialized');
  }
  return wsServer;
}

// In your Next.js custom server (if using one) or middleware
// Example for custom server:
// server.ts
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { initializeWebSocket } from './lib/websocket/init';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });

  // Initialize WebSocket server
  initializeWebSocket(server);

  server.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
});