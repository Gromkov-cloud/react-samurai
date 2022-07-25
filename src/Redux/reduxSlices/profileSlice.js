import {createSlice} from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profilePage",
    initialState: {
        userData: {
            id: null,
            fullName: null,
            lookingForAJob: null,
            lookingForAJobDescription: null,
            contacts: {
                vk: null,
            },
            photos: {
                small: null,
                large: null,
            },
            aboutMe: null,
        }
    },
    reducers: {
        addUserData: (state, action) => {
            state.userData = action.payload.userData
        }
    }
})

export const {addUserData} = profileSlice.actions

export const addUserDataAC = (userData) => ({
    userData,
})

export default profileSlice