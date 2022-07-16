const CHANGE_INPUT_MESSAGE_DATA = "CHANGE-INPUT-MESSAGE-DATA"
const CHANGE_MESSAGE_DATA = "CHANGE-MESSAGE-DATA"

const messagesReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_INPUT_MESSAGE_DATA:
            state.messageInput = action.injectedMessage
            return state
        case CHANGE_MESSAGE_DATA:
            let newMessageData = {
                id: Math.random(),
                message: state.messageInput,
            }
            state.messages.push(newMessageData)
            state.messageInput = ""
            return state
        default:
            return state
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

export default messagesReducer