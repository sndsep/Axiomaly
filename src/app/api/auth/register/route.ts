// src/app/api/auth/register/route.ts
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"
import prisma from "@/lib/db"
import { UserRole } from "@prisma/client"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    
    console.log("📝 Registration attempt:", { name, email }); // Log de datos recibidos

    if (!name || !email || !password) {
      console.log("❌ Missing fields:", { name: !!name, email: !!email, password: !!password });
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
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
        { error: "El email ya está registrado" },
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
    
    console.log("✅ Usuario creado:", { id: user.id, email: user.email });

    return NextResponse.json(
      { message: "Usuario registrado correctamente" },
      { status: 201 }
    )

  } catch (error) {
    console.error("🚨 Error de registro:", error);
    return NextResponse.json(
      { error: "Error al registrar usuario" },
      { status: 500 }
    )
  }
}
