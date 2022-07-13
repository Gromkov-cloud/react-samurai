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
    MessagesActions: {
        changeInputMessageData(injectedMessage) {
            store._state.MessagesData.dialogMessagesData.messageInput = injectedMessage
            reRender(store._state)
        },
        changeMessageData() {
            let newMessageData = {
                id: Math.random(),
                message: store._state.MessagesData.dialogMessagesData.messageInput,
            }
            store._state.MessagesData.dialogMessagesData.messages.push(newMessageData)
            store._state.MessagesData.dialogMessagesData.messageInput = ""
            reRender(store._state)
        }
    },
    subscribe: (observer) => {
        reRender = observer
    },
}

let reRender = () => {
}

export default store