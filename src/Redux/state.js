import postReducer from "./postReducer";
import messagesReducer from "./messagesReducer";

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
    subscribe(listener){
        this._callSubscriber = listener
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.PostsData = postReducer(this._state.PostsData, action)
        this._state.MessagesData.dialogMessagesData =
            messagesReducer(this._state.MessagesData.dialogMessagesData, action)
        this._callSubscriber(this._state)
    }
}
