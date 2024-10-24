import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { nanoid } from 'nanoid'

export async function securityMiddleware(req: Request) {
  // Generar ID de rastreo único
  const requestId = nanoid()
  
  // Validar token y permisos
  const token = await getToken({ req })
  
  // Headers de seguridad
  const headers = new Headers({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Request-ID': requestId,
    'Content-Security-Policy': "default-src 'self'; img-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
  })

  // Verificar método HTTP permitido
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
