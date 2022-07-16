import styles from "./DialogMessage.module.css"

const DialogMessages = (props) => {
    const messagesList = props.messagesData.map(messageData =>
         <p key={messageData.id} className={styles.message}>{messageData.message}</p>
    )

    return (
        messagesList




    )
}

export default DialogMessages
