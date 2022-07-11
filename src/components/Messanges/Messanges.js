import s from "./Messanges.module.css"
import {NavLink} from "react-router-dom";

const DialogLink = (props) => {
    return (
        <li>
            <NavLink to={props.id} className={s.link}>
                {props.name}
            </NavLink>
        </li>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Messages = () => {
    return (
        <div className={s.messengerContainer}>
            <div className={s.peopleList}>
                <ul>
                    <DialogLink name="Petr" id="1"/>
                    <DialogLink name="Oksana" id="2"/>
                    <DialogLink name="Vladislav" id="3"/>
                    <DialogLink name="Dmitry" id="4"/>
                    <DialogLink name="Alena" id="5"/>
                    <DialogLink name="Masha" id="6"/>
                    <DialogLink name="Petr" id="7"/>
                </ul>
            </div>
            <div className={s.messenger}>
                <div className={s.messengesContainer}>
                    <Message message="Hello"/>
                    <Message message="Hello"/>
                    <Message message="Hello"/>
                    <Message message="Hello"/>
                    <Message message="Hello"/>
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