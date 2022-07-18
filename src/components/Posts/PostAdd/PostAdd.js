import s from "./PostAdd.module.css"
import React from "react";

const PostAdd = (props) => {
    return (
        <div className={s.postContainer}>
            <textarea className={`${s.input} ${s.title}`}
                      onChange={props.onTitleChange}
                      value={props.titleValue}
                      placeholder="Post Title"/>
            <textarea className={`${s.input} ${s.post}`}
                      onChange={props.onBodyChange}
                      value={props.bodyValue}
                      placeholder="Post Body"/>
            <button className={s.button}
                    onClick={props.onPostSubmit}
            >
                Submit Post
            </button>
        </div>
    )
}

export default PostAdd