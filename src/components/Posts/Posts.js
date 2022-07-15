import Post from "./Post/Post"
import PostAdd from "./PostAdd/PostAdd"

const Posts = (props) => {

    return (
        <>
            <PostAdd dispatch={props.dispatch}
                     appState={props.appState}
            />
            <Post appState={props.appState}/>
        </>
    )
}

export default Posts