// src/app/api/auth/register/route.ts
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"
import prisma from "@/lib/db"
import { UserRole } from "@prisma/client"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    console.log("📝 Registration attempt:", { name, email });

    if (!name || !email || !password) {
      console.log("❌ Missing fields:", { name: !!name, email: !!email, password: !!password });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    })
    
    console.log("🔍 Existing user check:", !!existingUser);

    if (existingUser) {
      return NextResponse.json(
        { error: "Email is already registered" },
        { status: 400 }
      )
    }

    const hashedPassword = await hash(password, 10)
    console.log("🔑 Password hashed successfully");

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword
      }
    })
    
    console.log("✅ User created:", { id: user.id, email: user.email });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    )

  } catch (error) {
    console.error("🚨 Registration error:", error);
    return NextResponse.json(
      { error: "Error registering user" },
      { status: 500 }
    )
  }
}
