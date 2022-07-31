import {configureStore} from '@reduxjs/toolkit'
import messagesSlice from "./reduxSlices/messagesSlice";
import postsSlice from "./reduxSlices/postsSlice";
import usersSlice from "./reduxSlices/usersSlice";
import profileSlice from "./reduxSlices/profileSlice";
import loginSlice from "./reduxSlices/loginSlice"
import followToggle from "./reduxSlices/followSlice";
import paginationSlice from "./reduxSlices/paginationSlice";

const store = configureStore({
    reducer: {
        messages: messagesSlice.reducer,
        posts: postsSlice.reducer,
        usersPage: usersSlice.reducer,
        profilePage: profileSlice.reducer,
        loginPage: loginSlice.reducer,
        followToggle: followToggle.reducer,
        pagination: paginationSlice.reducer
    }
})

export default store
