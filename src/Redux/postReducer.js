const CHANGE_INPUT_POST_DATA = "CHANGE-INPUT-POST-DATA"
const ADD_POST = "ADD-POST"

const postReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_INPUT_POST_DATA:
            state.PostInput.title = action.title
            state.PostInput.postText = action.postText
            return state
        case ADD_POST:
            const title = action.title
            const postText = action.postText
            if (title || postText !== "") {
                let newPostData = {
                    title: title,
                    postText: postText,
                    author: "User Nickname",
                    avatar: "https://imgholder.ru/60x60",
                    likes: Math.random() * 100,
                }
                state.Posts.unshift(newPostData)
                state.PostInput.title = ""
                state.PostInput.postText = ""
            }
            return state
        default: return state
    }
}

export const addPostActionCreator = (title, postText) => {
    return {
        type: ADD_POST,
        title: title,
        postText: postText,
    }
}

export const changeInputPostDataActionCreator = (title, postText) => {
    return {
        type: CHANGE_INPUT_POST_DATA,
        title: title,
        postText: postText,
    }
}

export default postReducer