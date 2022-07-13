import s from "./Messanges.module.css"
import DialogLinks from "./DialogLink/DialogLink.js"
import DialogMessages from "./DialogMessage/DialogMessage";
import React from "react";

const Messages = (props) => {
    const textAreaRef = React.createRef()



    let readTextAreaValue = () => {
        return textAreaRef.current.value
    }

    return (
        <div className={s.messengerContainer}>
            <div className={s.peopleList}>
                <ul>
                    <DialogLinks linksData={props.MessagesData.dialogLinksData}/>
                </ul>
            </div>
            <div className={s.messenger}>
                <div className={s.messengesContainer}>
                    <DialogMessages messagesData={props.MessagesData.dialogMessagesData.messages}/>
                </div>
                <div className={s.newMessageContainer}>
                    <textarea
                        ref={textAreaRef}
                        onInput={() => props.MessagesActions.changeInputMessageData(readTextAreaValue())}
                        value={props.MessagesData.dialogMessagesData.messageInput}
                        placeholder="New message"
                    />

                    <button onClick={() => props.MessagesActions.changeMessageData()}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )


}

export default Messages