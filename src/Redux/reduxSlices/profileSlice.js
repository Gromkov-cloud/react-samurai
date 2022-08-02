import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {profileAPI} from "../../API/profileAPI";

export const fetchUserData = createAsyncThunk(
    "profilePage/fetchUserData",
    async (id) => {
        const response = await profileAPI.getUserData(id)
        return await response.json()
    }
)

export const setUserStatus = createAsyncThunk(
    "profilePage/setUserStatus",
    async (status) => {
        console.log()
        const response = await profileAPI.setStatus(status)
        const data = await response.json()
        console.log(data)
    }
)


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
        },
        status: null,
    },
    reducers: {
        addUserData: (state, action) => {
            state.userData = action.payload.userData
        },
        changeStatus: (state, action) => {
            state.userData.aboutMe = action.payload
        }
    },
    extraReducers: {
        [fetchUserData.pending]: (state) => {
            state.status = "pending"
        },
        [fetchUserData.fulfilled]: (state, action) => {
            state.userData = action.payload
            if (!action.payload.aboutMe) {state.userData.aboutMe = ""}
            state.status = "response created"
        },
        [fetchUserData.rejected]: (state) => {
            state.status = "error"
        }
    }
})

export const {addUserData, changeStatus} = profileSlice.actions

export const addUserDataAC = (userData) => ({
    userData,
})

export default profileSlice