import useSWR from "swr"

export function useUsers() {
  const { data: users, error, isLoading, mutate } = useSWR("/api/admin/users")

  return {
    users,
    isLoading,
    error,
    mutate
  }
}

