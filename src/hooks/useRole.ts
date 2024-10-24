import { useSession } from "next-auth/react"
import { Role } from "@/types/roles"

export const useRole = () => {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return { isAdmin: false, isInstructor: false, isStudent: false, role: null as Role | null }
  }

  const role = session?.user?.role as Role | undefined

  return {
    isAdmin: role === "ADMIN",
    isInstructor: role === "INSTRUCTOR",
    isStudent: role === "STUDENT",
    role,
  }
}
