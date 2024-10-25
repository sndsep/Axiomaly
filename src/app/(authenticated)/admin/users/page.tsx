'use client'

import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"
import { useUsers } from "@/hooks/use-users"
import { useEffect, useState } from "react"

interface User {
  id: string
  name: string
  email: string
  role: string
}

export default function AdminUsersPage() {
  const { users, isLoading, error } = useUsers()
  const [data, setData] = useState<User[]>([])

  useEffect(() => {
    if (users) {
      console.log('Users received:', users);
      setData(users);
    }
  }, [users]);

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
