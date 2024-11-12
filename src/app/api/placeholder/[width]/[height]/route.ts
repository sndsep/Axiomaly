// src/app/api/placeholder/[width]/[height]/route.ts
import { NextRequest } from 'next/server';
import { createCanvas } from 'canvas';

export async function GET(
  request: NextRequest,
  { params }: { params: { width: string; height: string } }
) {
  const width = parseInt(await params.width);
  const height = parseInt(await params.height);

  // Create canvas
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, width, height);

  // Draw placeholder text
  ctx.fillStyle = '#999999';
  ctx.font = `${Math.min(width, height) / 10}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${width}x${height}`, width / 2, height / 2);

  // Convert to buffer
  const buffer = canvas.toBuffer('image/png');

  // Return response
  return new Response(buffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}