// src/app/api/auth/register/route.ts
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/db" // Asegúrate que sea prisma y no db

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    
    console.log("📝 Registration attempt:", { name, email }); // Log de datos recibidos

    if (!name || !email || !password) {
      console.log("❌ Missing fields:", { name: !!name, email: !!email, password: !!password });
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }

    // Comprobar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    })
    
    console.log("🔍 Existing user check:", !!existingUser);

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      )
    }

    const hashedPassword = await hash(password, 10)
    console.log("🔑 Password hashed successfully");

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      }
    })
    
    console.log("✅ User created successfully:", { id: user.id, email: user.email });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email
      }
    })

  } catch (error) {
    console.error("🚨 Registration error:", error);
    return NextResponse.json(
      { message: String(error) }, // Convertir el error a string para ver más detalles
      { status: 500 }
    )
  }
}