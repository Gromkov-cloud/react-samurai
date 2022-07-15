const CHANGE_INPUT_MESSAGE_DATA = "CHANGE-INPUT-MESSAGE-DATA"
const CHANGE_MESSAGE_DATA = "CHANGE-MESSAGE-DATA"

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

    dispatch(action) {
        if (action.type === "CHANGE-INPUT-MESSAGE-DATA") {
            this.changeInputMessageData(action)
        } else if (action.type === "CHANGE-MESSAGE-DATA") {
            this.changeMessageData()
        }
    }
}

export const changeInputMessageDataActionCreator = (message) => {
    return {
        type: CHANGE_INPUT_MESSAGE_DATA,
        injectedMessage: message,
    }
}
export const changeMessageDataActionCreator = () => ({type: CHANGE_MESSAGE_DATA})

export default store