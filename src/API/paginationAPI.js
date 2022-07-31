export const paginationAPI =  {
    fetchUsersPage:async (pageNum, usersCount) => {
        const response = await fetch( `https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${usersCount}`, {
            credentials: "include"
        })
        return await response.json()
    }
}