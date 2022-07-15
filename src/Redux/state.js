const CHANGE_INPUT_MESSAGE_DATA = "CHANGE-INPUT-MESSAGE-DATA"
const CHANGE_MESSAGE_DATA = "CHANGE-MESSAGE-DATA"
const SCROLL_DOWN = "SCROLL-DOWN"
const CHANGE_INPUT_POST_DATA = "CHANGE-INPUT-POST-DATA"

const ADD_POST = "ADD-POST"

const store = {
    _state: {
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
        },
        MessagesData: {
            dialogLinksData: [
                {
                    name: "Petr",
                    id: "1"
                },
                {
                    name: "Sergey",
                    id: "2"
                },
                {
                    name: "Lena",
                    id: "3"
                },
                {
                    name: "Valera",
                    id: "4"
                },
                {
                    name: "Anastasia",
                    id: "5"
                },
                {
                    name: "Dmitry",
                    id: "6"
                }
            ],
            dialogMessagesData: {
                messages: [
                    {
                        id: 1,
                        message: "Hello"
                    },
                    {
                        id: 2,
                        message: "loremlorem loremlorem loremloremloremloremlorem"
                    },
                    {
                        id: 3,
                        message: "loremlorem loremlorem loremloremloremloremlorem"
                    },
                    {
                        id: 4,
                        message: "loremlorem loremlorem loremloremloremloremlorem"
                    },
                ],
                messageInput: "",
            },
        },
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    changeInputMessageData(action) {
        this._state.MessagesData.dialogMessagesData.messageInput = action.injectedMessage
        this._callSubscriber(this._state)
    },
    changeMessageData() {
        let newMessageData = {
            id: Math.random(),
            message: this._state.MessagesData.dialogMessagesData.messageInput,
        }
        this._state.MessagesData.dialogMessagesData.messages.push(newMessageData)
        this._state.MessagesData.dialogMessagesData.messageInput = ""
        this._callSubscriber(this._state)
    },
    scrollDown(action) {
        action.element.current.scrollTop = action.element.current.scrollHeight
    },
    changeInputPostData(action) {
        this._state.PostsData.PostInput.title = action.title
        this._state.PostsData.PostInput.postText = action.postText
        this._callSubscriber(this._state)
    },
    addPost(action) {
        if (action.title || action.postText !== "") {
            let newPostData = {
                title: action.title,
                postText: action.postText,
                author: "User Nickname",
                avatar: "https://imgholder.ru/60x60",
                likes: Math.random() * 100,
            }
            this._state.PostsData.Posts.unshift(newPostData)
            this._state.PostsData.PostInput.title = ""
            this._state.PostsData.PostInput.postText = ""
            this._callSubscriber(this._state)
        }
    },

    dispatch(action) {
        if (action.type === "CHANGE-INPUT-MESSAGE-DATA") {
            this.changeInputMessageData(action)
        } else if (action.type === "CHANGE-MESSAGE-DATA") {
            this.changeMessageData(action)
        } else if (action.type === "SCROLL-DOWN") {
            this.scrollDown(action)
        } else if (action.type === "ADD-POST") {
            this.addPost(action)
        } else if (action.type === "CHANGE-INPUT-POST-DATA") {
            this.changeInputPostData(action)
        }
    }
}

export const changeInputMessageDataActionCreator = (message) => {
    return {
        type: CHANGE_INPUT_MESSAGE_DATA,
        injectedMessage: message,
    }
}
export const changeMessageDataActionCreator = () => {
    return {
        type: CHANGE_MESSAGE_DATA,
    }
}

export const scrollDownActionCreator = (elem) => {
    return {
        type: SCROLL_DOWN,
        element: elem,
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

export default store