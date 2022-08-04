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
        addPost: (state, action) => {
            const title = action.payload.title
            const postText = action.payload.postText

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
})


export const {addPost} = postsSlice.actions

export default postsSlice