import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {profileAPI} from "../../API/profileAPI";

export const fetchUserData = createAsyncThunk(
    "profilePage/fetchUserData",
    async (id) => {
        const response = await profileAPI.getUserData(id)
        return await response.json()
    }
)

export const getUserStatus = createAsyncThunk(
    "profilePage/getUserStatus",
    async (userId) => {
        const response = await profileAPI.getStatus(userId)
        return  await response.json()
    }
)

export const setUserStatus = createAsyncThunk(
    "profilePage/setUserStatus",
    async (status) => {
        const response = await profileAPI.setStatus(status)
        const data = await response.json()
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
        userStatus: null,
        status: null,
    },
    reducers: {
        addUserData: (state, action) => {
            state.userData = action.payload.userData
        },
        changeStatus: (state, action) => {
            state.userStatus = action.payload
        }
    },
    extraReducers: {
        [fetchUserData.pending]: (state) => {
            state.status = "pending"
        },
        [fetchUserData.fulfilled]: (state, action) => {
            state.userData = action.payload
            state.status = "response created"
        },
        [fetchUserData.rejected]: (state) => {
            state.status = "error"
        },
        [getUserStatus.fulfilled]: (state, action) => {
            state.userStatus = action.payload
        }
    }
})

export const {addUserData, changeStatus} = profileSlice.actions

export const addUserDataAC = (userData) => ({
    userData,
})

export default profileSlice