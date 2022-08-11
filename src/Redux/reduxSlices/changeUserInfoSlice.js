import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "../../API/API";

export const fetchUserInfoThunk = createAsyncThunk(
    "changeUserInfoPage/fetchUserInfoThunk",
    async (ownerId, {dispatch}) => {
        const response = await API.changeUserInfoPageAPI.fetchUserData(ownerId)
        const data = await response.json()
        console.log(data)
        dispatch(setUserMainInfo(data))
        dispatch(setUserContacts(data))

    }
)

export const putUserInfoThunk = createAsyncThunk(
    "changeUserInfoPage/putUserInfoThunk",
    async (userInfo, _) => {
        const response = await API.changeUserInfoPageAPI.putUserInfo(userInfo)
        const data = await response.json()
        console.log(data)
    }
)

const changeUserInfoSlice = createSlice({
    name: "changeUserInfoPage",
    initialState: {
        userInfo: {
            mainInfo: {
                aboutMe: null,
                fullName: null,
                lookingForAJob: null,
                lookingForAJobDescription: null
            },
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
        }
    },
    reducers: {
        setUserMainInfo: (state, action) => {
            const {aboutMe, fullName, lookingForAJob, lookingForAJobDescription} = action.payload
            state.userInfo.mainInfo = {
                aboutMe: aboutMe,
                fullName,
                lookingForAJob,
                lookingForAJobDescription
            }
        },
        setUserContacts: (state, action) => {
            state.userInfo.contacts = action.payload.contacts
        }
    },
    extraReducers: {}
})

export const {setUserContacts, setUserMainInfo} = changeUserInfoSlice.actions

export default changeUserInfoSlice