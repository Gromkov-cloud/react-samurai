import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import messagesSlice from "./reduxSlices/messagesSlice";
import postsSlice from "./reduxSlices/postsSlice";
import usersSlice from "./reduxSlices/usersSlice";

const combinedReducers = combineReducers({
    messages: messagesSlice.reducer,
    posts: postsSlice.reducer,
    users: usersSlice.reducer,
})

const store = configureStore({
    reducer: combinedReducers
})

export default store
