import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import messagesSlice from "./reduxSlices/messagesSlice";
import postsSlice from "./reduxSlices/postsSlice";

const combinedReducers = combineReducers({
    messages: messagesSlice.reducer,
    posts: postsSlice.reducer,
})

const store = configureStore({
    reducer: combinedReducers
})

export default store
