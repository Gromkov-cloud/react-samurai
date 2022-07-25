import {configureStore} from '@reduxjs/toolkit'
import messagesSlice from "./reduxSlices/messagesSlice";
import postsSlice from "./reduxSlices/postsSlice";
import usersSlice from "./reduxSlices/usersSlice";
import profileSlice from "./reduxSlices/profileSlice";

const store = configureStore({
    reducer: {
        messages: messagesSlice.reducer,
        posts: postsSlice.reducer,
        usersPage: usersSlice.reducer,
        profilePage: profileSlice.reducer
    }
})

export default store
