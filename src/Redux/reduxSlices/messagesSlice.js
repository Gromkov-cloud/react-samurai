import {createSlice} from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: "messages",
    initialState: {
        MessagesData: {
            dialogLinksData: [
                {
                    name: "Petya",
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

    reducers: {
        changeInputMessageData: (state, action) => {

            state.MessagesData.dialogMessagesData.messageInput = action.payload.injectedMessage
        },
        changeMessageData: (state) => {
            let newMessageData = {
                id: Math.random(),
                message: state.MessagesData.dialogMessagesData.messageInput,
            }

            state.MessagesData.dialogMessagesData.messageInput = ""
            state.MessagesData.dialogMessagesData.messages.push(newMessageData)
        }
    }

})

export const changeInputMessageDataActionCreator = (message) => {
    return {
        injectedMessage: message,
    }
}

export const {changeInputMessageData, changeMessageData} = messagesSlice.actions

export default messagesSlice