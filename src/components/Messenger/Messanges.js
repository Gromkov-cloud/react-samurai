import s from "./Messanges.module.css"
import DialogLinks from "./DialogLink/DialogLink.js"
import DialogMessages from "./DialogMessage/DialogMessage";
import {useLoginRedirect} from "../../Hooks/useLoginRedirect";
import MessengerForm from "./MessengerForm/MessengerForm";

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
                <MessengerForm onMessageSubmit={props.onMessageSubmit}/>
            </div>
        </div>
    )
}

export default Messages