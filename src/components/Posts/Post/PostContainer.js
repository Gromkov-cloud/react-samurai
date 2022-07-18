import {connect} from "react-redux";
import Post from "./Post";

const mapStateToProps = (state) => (
    {posts: state.posts.PostsData.Posts}
)

const PostContainer = connect(mapStateToProps, null) (Post)

export default PostContainer