import {connect} from "react-redux";
import PostAdd from "./PostAdd";
import {addPost} from "../../../Redux/reduxSlices/postsSlice";

const mapStateToProps = (state) => (
    {
        titleValue: state.posts.PostsData.PostInput.title,
        bodyValue: state.posts.PostsData.PostInput.postText
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onPostSubmit(postData) {
            dispatch(addPost(postData))
        },
    }
)

const PostAddContainer = connect(mapStateToProps, mapDispatchToProps)(PostAdd)

export default PostAddContainer