import s from "./PostAdd.module.css"
import {addPost, changeInputPostData, changeInputPostDataActionCreator} from "../../../Redux/reduxSlices/postsSlice";
import React from "react";

const PostAdd = (props) => {

    const postTitleAreaRef = React.createRef()
    const postTextAreaRef = React.createRef()

    const getPostTitleValue = () => postTitleAreaRef.current.value
    const getPostTextValue = () => postTextAreaRef.current.value
    const setPostTitleValue = () => props.appState.posts.PostsData.PostInput.title
    const setPostTextValue = () => props.appState.posts.PostsData.PostInput.postText

    const onPostSubmit = () => {
        props.dispatch(addPost())
    }

    const onPostInput = () => {
        props.dispatch(changeInputPostData(
            changeInputPostDataActionCreator(getPostTitleValue(), getPostTextValue()))
        )
    }

    return (
        <div className={s.postContainer}>
            <textarea className={`${s.input} ${s.title}`}
                      ref={postTitleAreaRef}
                      onChange={onPostInput}
                      value={setPostTitleValue()}
                      placeholder="Post Title"/>
            <textarea className={`${s.input} ${s.post}`}
                      ref={postTextAreaRef}
                      onChange={onPostInput}
                      value={setPostTextValue()}
                      placeholder="Post Body"/>
            <button className={s.button}
                    onClick={onPostSubmit}
            >
                Submit Post
            </button>
        </div>
    )
}

export default PostAdd