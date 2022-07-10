import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.postContainer}>
            <div className={s.header}>
                <img className={s.avatar} src={props.avatar} alt="avatar"></img>
                <span className={s.author}>{props.author}</span>
            </div>
            <div>
                <h1 className={s.title}>{props.title}</h1>
                <p className={s.post}>{props.post}</p>
            </div>
            <span className={s.likesContainer}>
                Likes
                <span className={s.likes}>{props.likes}</span>
            </span>
        </div>
    )
}

export default Post