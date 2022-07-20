import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "usersPage",
    initialState: {
        users: [
            {
                id: 1,
                name: "Alex S.",
                country: "Russia",
                city: "Moscow",
                description: "Keep learning React",
                followed: true,
            },
            {
                id: 2,
                name: "Andrew B.",
                country: "Netherlands",
                city: "Amsterdam",
                description: "React is cool",
                followed: false,
            },
            {
                id: 3,
                name: "Viktoria N.",
                country: "Iceland",
                city: "Reykjavik",
                description: "React is cool",
                followed: true,
            },
            {
                id: 4,
                name: "Viktoria N.",
                country: "Iceland",
                city: "Reykjavik",
                description: "React is cool",
                followed: false,
            },
        ],
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

        }
    }
})

export const followToggleActionCreator = (userId) => ({
    id: userId,
})

export const {followToggle, loadMoreUsers} = usersSlice.actions

export default usersSlice