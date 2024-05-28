import { useQuery } from "react-query"
import { fetchUsers } from "../services/userService"
import { useUserStore } from "../store/useUserStore"
import { useEffect } from "react"

export const useFetchAndUpdateUsers = () => {
    const { data: users } = useQuery("users", fetchUsers)
    const setUsers = useUserStore(state => state.setUsers)

    useEffect(() => {
        if (users) {
            setUsers(users)
        }
    }, [users, setUsers])
}