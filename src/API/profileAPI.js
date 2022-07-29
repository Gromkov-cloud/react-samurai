export const profileAPI = {
    getUserData: async (id) => {
        return await fetch(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
    }
}