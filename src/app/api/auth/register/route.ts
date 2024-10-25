// src/app/api/auth/register/route.ts
import { hash } from "bcrypt"
import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const { nombre, correo, contraseña } = await req.json()

    // Check if the user already exists
    const existingUser = await db.user.findUnique({
      where: { email: correo }
    })

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Create the new user
    const hashedPassword = await hash(contraseña, 10)
    const newUser = await db.user.create({
      data: {
        name: nombre,
        email: correo,
        hashedPassword,
        role: 'STUDENT', // Add a default role
      }
    })

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 })
  } catch (error) {
    console.error("Error registering user:", error)
    return NextResponse.json({ error: "Error registering user" }, { status: 500 })
  }
}
