export const loginAPI = {
    login: async () => {
        return await fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {credentials: "include"})
    }
}