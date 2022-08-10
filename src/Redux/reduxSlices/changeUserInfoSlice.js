import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "../../API/API";

export const fetchUserInfoThunk = createAsyncThunk(
    "changeUserInfoPage/fetchUserInfoThunk",
    async (ownerId, {dispatch}) => {
        const response = await API.changeUserInfoPageAPI.fetchUserData(ownerId)
        const data = await response.json()
        dispatch(setUserContacts(data.contacts))
    }
)

export const putUserInfoThunk = createAsyncThunk(
    "changeUserInfoPage/putUserInfoThunk",
    async (userInfo,_) => {
        const response = await API.changeUserInfoPageAPI.putUserInfo(userInfo)
        const data = await response.json()
        console.log(data)
    }
)

const changeUserInfoSlice = createSlice({
    name: "changeUserInfoPage",
    initialState: {
        contacts: {
            facebook: null,
            github: null,
            instagram: null,
            mainLink: null,
            twitter: null,
            vk: null,
            website: null,
            youtube: null
        }
    },
    reducers: {
        setUserContacts: (state, action) => {
            state.contacts = action.payload
        }
    },
    extraReducers: {}
})

export const {setUserContacts} = changeUserInfoSlice.actions

export default changeUserInfoSlice