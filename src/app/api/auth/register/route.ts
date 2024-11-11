// src/app/api/auth/register/route.ts

import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { prisma } from "@/lib/prisma"
import * as z from "zod"

const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export async function POST(req: Request) {
  try {
    // Log the incoming request
    console.log('Incoming registration request')

    // Check if the request is valid
    if (!req.body) {
      console.log('No request body found')
      return new NextResponse(
        JSON.stringify({ error: 'Request body is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Parse the request body
    let body
    try {
      body = await req.json()
      console.log('Parsed request body:', { ...body, password: '[REDACTED]' })
    } catch (e) {
      console.log('Failed to parse request body:', e)
      return new NextResponse(
        JSON.stringify({ error: 'Invalid request body' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Validate the request data
    const validationResult = userSchema.safeParse(body)
    if (!validationResult.success) {
      console.log('Validation failed:', validationResult.error)
      return new NextResponse(
        JSON.stringify({ 
          error: 'Validation failed', 
          details: validationResult.error.errors 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const { name, email, password } = validationResult.data

    // Check for existing user
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ error: 'User already exists' }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Hash password
    const hashedPassword = await hash(password, 12)

    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        role: 'STUDENT',
        hasCompletedOnboarding: false,
      },
    })

    // Remove sensitive data
    const { hashedPassword: _, ...safeUser } = user

    // Return success response
    return new NextResponse(
      JSON.stringify({
        success: true,
        user: safeUser,
      }),
      { 
        status: 201, 
        headers: { 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    // Log the error safely
    console.log('Registration error:', {
      name: error?.name,
      message: error?.message,
      stack: error?.stack
    })

    // Return error response
    return new NextResponse(
      JSON.stringify({ 
        error: 'Internal server error',
        message: 'Failed to create user'
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    )
  }
}