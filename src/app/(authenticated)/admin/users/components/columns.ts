import { User } from "@/types/user"

// Define tus columnas aquí
export const columns = [
  {
    id: 'name',
    label: 'Name',
    renderCell: (row: User) => row.name,
  },
  {
    id: 'email',
    label: 'Email',
    renderCell: (row: User) => row.email,
  },
  {
    id: 'role',
    label: 'Role',
    renderCell: (row: User) => row.role,
  },
]
