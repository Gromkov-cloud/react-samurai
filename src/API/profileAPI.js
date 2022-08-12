export const profileAPI = {
    getUserData: async (id) => {
        return await fetch(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
    },
    getStatus: async (userId) => {
        return await fetch(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`)
    },
    setStatus: async (status) => {
        return await fetch(`https://social-network.samuraijs.com/api/1.0/profile/status`, {
                method: "Put",
                credentials: "include",
                headers: {
                    "API-KEY": "d8cc6de0-975e-4755-a3ab-7bc830ca2dba",
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({status: status}),
            }
        )
    },
    setAvatar: async (data) => {
        return await fetch(`https://social-network.samuraijs.com/api/1.0/profile/photo`, {
                method: "Put",
                credentials: "include",
                headers: {
                    "API-KEY": "d8cc6de0-975e-4755-a3ab-7bc830ca2dba",
                    'Accept': 'application/json'
                },
                body: data,
            }
        )
    },
    getAvatar: async (id) => {
        return await fetch(`https://social-network.samuraijs.com/api/1.0/profile/${id}`, {
                credentials: "include",
            }
        )
    }
}