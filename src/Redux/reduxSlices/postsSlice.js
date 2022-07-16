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
            state.PostsData.PostInput.title = action.payload.title
            state.PostsData.PostInput.postText = action.payload.postText
            console.log(action.payload.title, action.payload.postText)
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

export const changeInputPostDataActionCreator = (title, postText) => {
    return {
        title: title,
        postText: postText,
    }
}

export const {addPost, changeInputPostData} = postsSlice.actions

export default postsSlice