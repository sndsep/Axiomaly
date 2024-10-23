import { useSession } from "next-auth/react"
import { UserRole } from "@/types/roles"

export const useRole = () => {
  const { data: session } = useSession()
  
  return {
    isAdmin: session?.user?.role === UserRole.ADMIN,
    isInstructor: session?.user?.role === UserRole.INSTRUCTOR,
    isStudent: session?.user?.role === UserRole.STUDENT,
    role: session?.user?.role
  }
}
