const CHANGE_INPUT_MESSAGE_DATA = "CHANGE-INPUT-MESSAGE-DATA"
const CHANGE_MESSAGE_DATA = "CHANGE-MESSAGE-DATA"
const SCROLL_DOWN = "SCROLL-DOWN"

const store = {
    _state: {
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
                        message: "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от все" +
                            "го сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я."
                    },
                    {
                        id: 3,
                        message: "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от все" +
                            "го сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я."
                    },
                    {
                        id: 4,
                        message: "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от все" +
                            "го сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я."
                    },
                    {
                        id: 5,
                        message: "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от все" +
                            "го сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я."
                    },
                    {
                        id: 6,
                        message: "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от все" +
                            "го сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я."
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

    dispatch(action) {
        // debugger
        if (action.type === "CHANGE-INPUT-MESSAGE-DATA") {
            this.changeInputMessageData(action)
        } else if (action.type === "CHANGE-MESSAGE-DATA") {
            this.changeMessageData(action)
        } else if (action.type === "SCROLL-DOWN") {
            this.scrollDown(action)
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

export default store