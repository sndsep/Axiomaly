// src/app/api/placeholder/[width]/[height]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { width: string; height: string } }
) {
  const width = parseInt(params.width);
  const height = parseInt(params.height);

  // Validate dimensions
  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    return new NextResponse('Invalid dimensions', { status: 400 });
  }

  // Create SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#F3F4F6"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial" 
        font-size="14" 
        fill="#6B7280" 
        text-anchor="middle" 
        dy=".3em"
      >${width}x${height}</text>
    </svg>
  `;

  // Return the SVG with appropriate headers
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}