import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {followAPI} from "../../API/followAPI";

export const fetchFollowData = createAsyncThunk(
    "followToggle/follow",
    async (userId, {dispatch,getState}) => {
        try {
            const hasUserSubscriptionsUserId = getState().followToggle.userSubscriptions.indexOf(userId) === -1

            if (hasUserSubscriptionsUserId) {
                await followAPI.followRequest(userId, "Post")
            } else {
                await followAPI.followRequest(userId, "Delete")
            }

            dispatch(changeFollowButtonType(userId))
            dispatch(toggleBtnText(userId))

        } catch (e) {
        }
    }
)


const followToggle = createSlice({
    name: "followToggle",
    initialState: {
        userSubscriptions: [],
        fetchStatus: null,
        followedUserId: []
    },
    reducers: {
        toggleBtnText: (state, action) => {
            const id = action.payload
            let subscriptions = state.userSubscriptions
            if (subscriptions.indexOf(id) === -1) {
                subscriptions.push(id)
            } else {
                state.userSubscriptions = subscriptions.filter(userId => userId !== id)
            }
        },
        setUnfollowData: (state, action) => {
            action.payload.forEach(user => {
                if (user.followed) {
                    state.userSubscriptions.push(user.id)
                }
            })
        },
        changeFollowButtonType: (state, action) => {
            if (state.followedUserId.some(userId => userId === action.payload)) {
                state.followedUserId = state.followedUserId.filter(userId => userId !== action.payload)
            } else {
                state.followedUserId.push(action.payload)
            }
        },
        getUserSubscriptions: (state) => {
            const subscriptions = [...state.userSubscriptions]
            return subscriptions
        },
    },
    extraReducers: {
        [fetchFollowData.pending]: (state) => {
            state.fetchStatus = "pending"
        },
        [fetchFollowData.fulfilled]: (state) => {
            state.fetchStatus = "fulfilled"
        },
        [fetchFollowData.rejected]: (state) => {
            state.fetchStatus = "rejected"
        }
    }
})

export const {toggleBtnText, setUnfollowData, changeFollowButtonType} = followToggle.actions

export default followToggle