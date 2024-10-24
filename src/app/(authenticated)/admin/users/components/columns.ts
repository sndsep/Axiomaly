import { User } from "@/types/user"

// Define tus columnas aquí
export const columns = [
  {
    id: 'name',
    label: 'Nombre',
    renderCell: (row: User) => row.name,
  },
  {
    id: 'email',
    label: 'Email',
    renderCell: (row: User) => row.email,
  },
  {
    id: 'role',
    label: 'Rol',
    renderCell: (row: User) => row.role,
  },
]
