import {createSlice} from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        PostsData: {
            Posts: [
                {
                    title: "Post Title",
                    postText: "Post Text",
                    author: "User Nickname",
                    avatar: "https://imgholder.ru/60x60",
                    likes: 34,
                }
            ],
            PostInput: {
                title: "",
                postText: "",
            }
        }
    },

    reducers: {
        changeInputPostData: (state, action) => {
            if (action.payload.eventParent === "POST-TITLE") {
                state.PostsData.PostInput.title = action.payload.text
            } else if (action.payload.eventParent === "POST-BODY") {
                state.PostsData.PostInput.postText = action.payload.text
            }
        },
        addPost: (state) => {
            const title = state.PostsData.PostInput.title
            const postText = state.PostsData.PostInput.postText
            if (title || postText !== "") {
                let newPostData = {
                    title: title,
                    postText: postText,
                    author: "User Nickname",
                    avatar: "https://imgholder.ru/60x60",
                    likes: Math.random() * 100,
                }
                state.PostsData.Posts.unshift(newPostData)
                state.PostsData.PostInput.title = ""
                state.PostsData.PostInput.postText = ""
            }
        }
    }
})

export const changeInputPostDataActionCreator = (eventParent, text) => {
    return {
        eventParent: eventParent,
        text: text,
    }
}

export const {addPost, changeInputPostData} = postsSlice.actions

export default postsSlice