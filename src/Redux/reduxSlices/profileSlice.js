import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk(
    "profilePage/fetchUserData",
    async (id) => {
        const response =  await fetch(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
        return await response.json()
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
        }
    }
})

export const {addUserData} = profileSlice.actions

export const addUserDataAC = (userData) => ({
    userData,
})

export default profileSlice