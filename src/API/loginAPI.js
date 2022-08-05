export const loginAPI = {
    auth: async () => {
        return await fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {credentials: "include"})
    },
    login: async (email, password, rememberMe, captcha) => {
        return await fetch(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
            method: "Post",
            credentials: "include",
            headers: {
                "API-KEY": "d8cc6de0-975e-4755-a3ab-7bc830ca2dba",
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                rememberMe: rememberMe,
                captcha: true
            }),
        })
    }
}