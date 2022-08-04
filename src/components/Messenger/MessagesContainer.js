import Messages from "./Messanges";
import {
    changeMessageData
} from "../../Redux/reduxSlices/messagesSlice";
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
        linksData: state.messages.MessagesData.dialogLinksData,
        messagesData: state.messages.MessagesData.dialogMessagesData.messages,
        textAreaValue: state.messages.MessagesData.dialogMessagesData.messageInput
    }
)
const mapDispatchToProps = (dispatch) => (
    {
        onMessageSubmit(message) {
            const id = Math.floor(Math.random()*1000)
            const messageData = {
                id,
                message
            }
            dispatch(changeMessageData(messageData))
        }
    }
)
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer