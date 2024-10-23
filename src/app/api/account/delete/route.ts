import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/auth-config"
import { db } from "@/lib/db/db"

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    // Delete user and all related data
    await db.user.delete({
      where: {
        id: session.user.id
      }
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.error("[ACCOUNT_DELETE]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
