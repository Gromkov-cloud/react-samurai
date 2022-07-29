export const usersAPI = {
    fetchUsers: async (initialPage, usersCount ) => {
        return await fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${initialPage}&count=${usersCount}`,{
            credentials: "include",
        })
    }
}