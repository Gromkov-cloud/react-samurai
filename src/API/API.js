const API = {
    changeUserInfoPageAPI: {
        fetchUserData: async (ownerId) => {
            return await fetch(`https://social-network.samuraijs.com/api/1.0/profile/${ownerId}`)
        },
        putUserInfo: async (userInfo) => {
            console.log(userInfo.vkLink)
            return await fetch(`https://social-network.samuraijs.com/api/1.0/profile`, {
                    method: "Put",
                    credentials: "include",
                    headers: {
                        "API-KEY": "d8cc6de0-975e-4755-a3ab-7bc830ca2dba",
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        AboutMe: userInfo.aboutMe,
                        LookingForAJob: userInfo.lookingForAJob,
                        LookingForAJobDescription: userInfo.lookingForAJobDescription,
                        FullName: userInfo.fullName,
                        contacts: {
                            vk: userInfo.vkLink,
                            github: userInfo.githubLink,
                            facebook: userInfo.facebookLink,
                            instagram: userInfo.instagramLink,
                            twitter: userInfo.twitterLink,
                            website: userInfo.websiteLink,
                            youtube: userInfo.youtubeLink,
                        }
                    }),
                }
            )
        }
    }
}

export default API