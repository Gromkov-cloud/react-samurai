import s from "./PostAdd.module.css"

const PostAdd = () => {
    return (
        <div className={s.postContainer}>
            <textarea className={`${s.input} ${s.title}`} placeholder="Post Title"></textarea>
            <textarea className={`${s.input} ${s.post}`} placeholder="Post Body"></textarea>
            <button className={s.button}>Submit Post</button>
        </div>
    )
}

export default PostAdd