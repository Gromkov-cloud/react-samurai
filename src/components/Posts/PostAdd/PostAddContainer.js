import {connect} from "react-redux";
import PostAdd from "./PostAdd";
import {addPost, changeInputPostData, changeInputPostDataActionCreator} from "../../../Redux/reduxSlices/postsSlice";

const mapStateToProps = (state) => (
    {
        titleValue: state.posts.PostsData.PostInput.title,
        bodyValue: state.posts.PostsData.PostInput.postText
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onPostSubmit() {
            dispatch(addPost())
        },
        onTitleChange(e) {
            const actionData = changeInputPostDataActionCreator(
                "POST-TITLE",
                e.target.value
            )
            dispatch(changeInputPostData(actionData))
        },
        onBodyChange(e) {
            const actionData = changeInputPostDataActionCreator(
                "POST-BODY",
                e.target.value
            )
            dispatch(changeInputPostData(actionData))
        },
    }
)

const PostAddContainer = connect(mapStateToProps, mapDispatchToProps)(PostAdd)

export default PostAddContainer