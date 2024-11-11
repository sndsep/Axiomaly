import { useCallback } from 'react'

export function useAuth() {
  const login = useCallback(async (email: string, password: string) => {
    // Implementar lógica de login
  }, [])

  const logout = useCallback(async () => {
    // Implementar lógica de logout
  }, [])

  return { login, logout }
}
