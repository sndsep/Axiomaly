import { rateLimit } from 'express-rate-limit'
import { NextResponse } from 'next/server'

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // límite de solicitudes por ventana
  message: { error: 'Demasiadas solicitudes, intente más tarde' },
  handler: (_, __, ___, options) => {
    return NextResponse.json(
      { error: options.message },
      { status: 429 }
    )
  },
  keyGenerator: (req) => {
    return req.ip || 'anonymous'
  },
})

