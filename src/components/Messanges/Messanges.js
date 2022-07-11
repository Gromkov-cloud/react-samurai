import s from "./Messanges.module.css"
import DialogLinks from "./DialogLink/DialogLink.js"
import DialogMessages from "./DialogMessage/DialogMessage";

const Messages = (props) => {
    return (
        <div className={s.messengerContainer}>
            <div className={s.peopleList}>
                <ul>
                    <DialogLinks linksData={dialogLinksData}/>
                </ul>
            </div>
            <div className={s.messenger}>
                <div className={s.messengesContainer}>
                    <DialogMessages messagesData={dialogMessagesData}/>
                </div>
                <div className={s.newMessageContainer}>
                    <input type="text" placeholder="New message"/>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

let dialogLinksData = [
    {name: "Petr", id: "1"},
    {name: "Sergey", id: "2"},
    {name: "Lena", id: "3"},
    {name: "Valera", id: "4"},
    {name: "Anastasia", id: "5"},
]
let dialogMessagesData = [
    {id: 1, message : "Hello",},
    {id: 2, message : "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я."},
    {id: 3, message : "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я."},
    {id: 4, message : "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я."},
    {id: 5, message : "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я."},
    {id: 6, message : "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я."},
]

export default Messages