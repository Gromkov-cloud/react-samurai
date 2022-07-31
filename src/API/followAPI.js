export const followAPI = {
    followRequest:  async (userId, method) => {
         return  await fetch(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            method: method,
            credentials: "include",
            headers: {
                "API-KEY": "d8cc6de0-975e-4755-a3ab-7bc830ca2dba"
            }
        })
    }
}