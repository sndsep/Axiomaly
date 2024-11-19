/**
 * File: src/app/api/auth/[...nextauth]/route.ts
 * Description: NextAuth.js API route handler
 */

import { authOptions } from "@/lib/auth-utils"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }