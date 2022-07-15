import styles from  "./DialogMessage.module.css"

const DialogMessages = (props) => {
    return (
        props.messagesData.map(messageData =>
            <div key={messageData.id}>
                <p className={styles.message}>{messageData.message}</p>
            </div>
        )
    )
}
export default DialogMessages
