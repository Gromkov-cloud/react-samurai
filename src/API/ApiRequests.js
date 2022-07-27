import axios from "axios";

export const api = {
    getProfileData: (userId) => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                    return response.data
                }
            )
    }
}