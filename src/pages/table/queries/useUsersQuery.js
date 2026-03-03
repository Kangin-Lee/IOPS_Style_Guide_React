import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/usersApi";

export function useUsersQuery() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
}