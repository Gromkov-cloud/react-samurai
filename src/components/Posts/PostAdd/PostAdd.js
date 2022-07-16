import s from "./PostAdd.module.css"
import {addPostActionCreator, changeInputPostDataActionCreator} from "../../../Redux/postReducer";
import React from "react";

const PostAdd = (props) => {

    const postTitleAreaRef = React.createRef()
    const postTextAreaRef = React.createRef()

    const getPostTitleValue = () => postTitleAreaRef.current.value
    const getPostTextValue = () => postTextAreaRef.current.value
    const setPostTitleValue = () => props.appState.PostsData.PostInput.title
    const setPostTextValue = () => props.appState.PostsData.PostInput.postText

    const addPost = () => {
        props.dispatch(addPostActionCreator(getPostTitleValue(),getPostTextValue()))
    }

    const changePostData = () => {
        props.dispatch(changeInputPostDataActionCreator(getPostTitleValue(),getPostTextValue()))
    }

    return (
        <div className={s.postContainer}>
            <textarea className={`${s.input} ${s.title}`}
                      ref={postTitleAreaRef}
                      onChange={changePostData}
                      value={setPostTitleValue()}
                      placeholder="Post Title"/>
            <textarea className={`${s.input} ${s.post}`}
                      ref={postTextAreaRef}
                      onChange={changePostData}
                      value={setPostTextValue()}
                      placeholder="Post Body"/>
            <button className={s.button}
                    onClick={addPost}
            >
                Submit Post
            </button>
        </div>
    )
}

export default PostAdd