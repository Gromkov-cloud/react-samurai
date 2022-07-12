import s from "./Messanges.module.css"
import DialogLinks from "./DialogLink/DialogLink.js"
import DialogMessages from "./DialogMessage/DialogMessage";

const Messages = (props) => {

    return (
        <div className={s.messengerContainer}>
            <div className={s.peopleList}>
                <ul>
                    <DialogLinks linksData={props.MessagesData.dialogLinksData}/>
                </ul>
            </div>
            <div className={s.messenger}>
                <div className={s.messengesContainer}>
                    <DialogMessages messagesData={props.MessagesData.dialogMessagesData}/>
                </div>
                <div className={s.newMessageContainer}>
                    <input type="text" placeholder="New message"/>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Messages