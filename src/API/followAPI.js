export const followAPI = {
    followToggle:  async (userId, method) => {
         return  await fetch(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            method: method,
            credentials: "include",
            headers: {
                "API-KEY": "3ef1f56a-8110-442d-b381-480f005cf1b2"
            }
        })
    }
}