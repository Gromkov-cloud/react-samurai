import {configureStore} from '@reduxjs/toolkit'
import messagesSlice from "./reduxSlices/messagesSlice";
import postsSlice from "./reduxSlices/postsSlice";
import usersSlice from "./reduxSlices/usersSlice";
import profileSlice from "./reduxSlices/profileSlice";
import loginSlice from "./reduxSlices/loginSlice"

const store = configureStore({
    reducer: {
        messages: messagesSlice.reducer,
        posts: postsSlice.reducer,
        usersPage: usersSlice.reducer,
        profilePage: profileSlice.reducer,
        loginPage: loginSlice.reducer
    }
})

export default store
