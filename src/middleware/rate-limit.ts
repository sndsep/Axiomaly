import { rateLimit, Options } from 'express-rate-limit'
import { NextResponse } from 'next/server'
import { Request } from 'express'

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // request limit per window
  message: { error: 'Too many requests, please try again later' },
  handler: (_: Request, __: any, ___: any, options: Options) => {
    return NextResponse.json(
      { error: options.message },
      { status: 429 }
    )
  },
  keyGenerator: (req: Request) => {
    return req.ip || 'anonymous'
  },
})
