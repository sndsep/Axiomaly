import { useState, useEffect } from 'react';
import { UserRole } from "@/types/roles"

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

interface ErrorResponse {
  message: string;
}

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/admin/users');
        if (!response.ok) {
          throw new Error('Error al obtener usuarios');
        }
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (err) {
        setError({ message: err instanceof Error ? err.message : 'Error desconocido' });
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, isLoading, error };
}
