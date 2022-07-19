import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: [
        {
            id: 1,
            name: "Alex S.",
            country: "Russia",
            city: "Moscow",
            description: "Keep learning React",
            follow: true,
        },
        {
            id: 2,
            name: "Andrew B.",
            country: "Netherlands",
            city: "Amsterdam",
            description: "React is cool",
            follow: false,
        },
        {
            id: 3,
            name: "Viktoria N.",
            country: "Iceland",
            city: "Reykjavik",
            description: "React is cool",
            follow: true,
        },
        // {
        //     id: 4,
        //     name: "Viktoria N.",
        //     country: "Iceland",
        //     city: "Reykjavik",
        //     description: "React is cool",
        //     follow: false,
        // },
    ],
    reducers: {
        followToggle(state, action) {
            console.log(action.payload.e)
        },
        loadMoreUsers() {

        }
    }
})

export const {followToggle, loadMoreUsers} = usersSlice.actions

export default usersSlice