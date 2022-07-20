import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "usersPage",
    initialState: {
        users: [],
    },
    reducers: {
        followToggle: (state, action) => {
            const userId = action.payload.id

            state.users.forEach(user => {
                if (user.id === userId) {
                    if (user.followed) {
                        user.followed = false
                    } else {
                        user.followed = true
                    }
                }
            })
        },
        loadMoreUsers: (state) => {

        },
        setUsers: (state, action) => {
            const newUsers = action.payload.users
            newUsers.forEach(user => {
                state.users.push(user)
            })
        }
    }
})

export const followToggleActionCreator = (userId) => ({
    id: userId,
})
export const setUsersActionCreator = (users) => ({
    users: users,
})

export const {followToggle, loadMoreUsers, setUsers} = usersSlice.actions

export default usersSlice