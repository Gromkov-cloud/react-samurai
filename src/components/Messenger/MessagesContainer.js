import Messages from "./Messanges";
import {
    changeInputMessageData,
    changeInputMessageDataActionCreator,
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
        onTextareaInput(e) {
            dispatch(
                changeInputMessageData(changeInputMessageDataActionCreator(e.target.value))
            )
        },
        onMessageSubmit() {
            const id = Math.floor(Math.random()*1000)
            dispatch(changeMessageData(id))
        }
    }
)
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer