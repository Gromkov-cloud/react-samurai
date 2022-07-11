

const DialogMessages = (props) => {
    return (
        props.messagesData.map(messageData =>
            <div key={messageData.id}>
                <span>{messageData.message}</span>
            </div>
        )
    )
}
export default DialogMessages
