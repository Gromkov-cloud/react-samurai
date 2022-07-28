import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchFollowData = createAsyncThunk(
    "followToggle/follow",
    async (userId, {dispatch, getState}) => {
        try {
            const state = getState()
            let method

            if (state.followToggle.userSubscriptions.indexOf(userId) === -1) {
                method = "Post"
            } else {
                method = "Delete"
            }

            const response = await fetch(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
                method: method,
                credentials: "include",
                headers: {
                    "API-KEY": "3ef1f56a-8110-442d-b381-480f005cf1b2"
                }
            })

            const data = await response.json()
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
            if (state.userSubscriptions.indexOf(action.payload) === -1) {
                state.userSubscriptions.push(action.payload)
            } else {
                state.userSubscriptions = state.userSubscriptions.filter(userId => userId !== action.payload)
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
                console.log(state.followedUserId.filter(userId => userId !== action.payload))
                state.followedUserId = state.followedUserId.filter(userId => userId !== action.payload)
            } else {
                console.log("pushed")
                state.followedUserId.push(action.payload)
            }
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