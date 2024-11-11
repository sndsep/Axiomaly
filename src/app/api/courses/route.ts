import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Aquí iría la lógica para obtener cursos
    return NextResponse.json({ courses: [] })
  } catch (error) {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
