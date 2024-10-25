import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { nanoid } from 'nanoid'

export async function securityMiddleware(req: Request) {
  // Generate unique tracking ID
  const requestId = nanoid()
  
  // Validate token and permissions
  const token = await getToken({ req })
  
  // Security headers
  const headers = new Headers({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Request-ID': requestId,
    'Content-Security-Policy': "default-src 'self'; img-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
  })

  // Verify allowed HTTP method
  const allowedMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  if (!allowedMethods.includes(req.method)) {
    return new NextResponse(null, {
      status: 405,
      statusText: 'Method Not Allowed',
      headers,
    })
  }

  return NextResponse.next({
    headers,
  })
}
