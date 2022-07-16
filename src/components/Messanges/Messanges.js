import s from "./Messanges.module.css"
import DialogLinks from "./DialogLink/DialogLink.js"
import DialogMessages from "./DialogMessage/DialogMessage";
import {changeInputMessageDataActionCreator, changeMessageDataActionCreator} from "../../Redux/messagesReducer";
import React from "react";

const Messages = (props) => {

    const textAreaRef = React.createRef()

    const readTextAreaValue = () => textAreaRef.current.value
    const getTextareaNewValue = () => props.MessagesData.dialogMessagesData.messageInput

    const onTextareaInput = () => {
        props.dispatch(
            changeInputMessageDataActionCreator(readTextAreaValue())
        )
    }
    const onMessageSubmit = () => {
        props.dispatch(changeMessageDataActionCreator())
    }

    return (
        <div className={s.messengerContainer}>
            <div className={s.peopleList}>
                <ul>
                    <DialogLinks linksData={props.MessagesData.dialogLinksData}/>
                </ul>
            </div>
            <div className={s.messenger}>
                <div className={s.messagesContainer}
                >
                    <DialogMessages messagesData={props.MessagesData.dialogMessagesData.messages}/>
                </div>
                <div className={s.newMessageContainer}>
                    <textarea
                        className={s.messageInput}
                        ref={textAreaRef}
                        onInput={onTextareaInput}
                        value={getTextareaNewValue()}
                        placeholder="New message"
                    />
                    <button className={s.submitBtn} onClick={onMessageSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Messages