import s from "./Messanges.module.css"
import DialogLinks from "./DialogLink/DialogLink.js"
import DialogMessages from "./DialogMessage/DialogMessage";
import {useLoginRedirect} from "../../Hooks/useLoginRedirect";

const Messages = (props) => {

    useLoginRedirect()

    return (
        <div className={s.messengerContainer}>
            <div className={s.peopleList}>
                <ul>
                    <DialogLinks linksData={props.linksData}/>
                </ul>
            </div>
            <div className={s.messenger}>
                <div className={s.messagesContainer}
                >
                    <DialogMessages messagesData={props.messagesData}/>
                </div>
                <div>
                    <textarea
                        className={s.messageInput}
                        onInput={props.onTextareaInput}
                        value={props.textAreaValue}
                        placeholder="New message"
                    />
                    <button className={s.submitBtn} onClick={props.onMessageSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Messages