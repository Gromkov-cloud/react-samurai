import React from "react";
import Messages from "./Messanges";
import {
    changeInputMessageData,
    changeInputMessageDataActionCreator,
    changeMessageData
} from "../../Redux/reduxSlices/messagesSlice";

const MessagesContainer = ({appStore}) => {

    const messagesData = appStore.getState().messages.MessagesData

    const onTextareaInput = (e) => {
        appStore.dispatch(
            changeInputMessageData(changeInputMessageDataActionCreator(e.target.value))
        )
    }
    const onMessageSubmit = () => {
        appStore.dispatch(changeMessageData())
    }

    return (
        <Messages onTextareaInput={onTextareaInput}
                  onMessageSubmit={onMessageSubmit}
                  linksData={messagesData.dialogLinksData}
                  messagesData={messagesData.dialogMessagesData.messages}
                  textAreaValue={messagesData.dialogMessagesData.messageInput}
        />
    )
}

export default MessagesContainer