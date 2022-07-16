import s from "./Post.module.css"

const Post = (props) => {
    const posts = () => props.appState.posts.PostsData.Posts.map(post =>
        <div className={s.postContainer}
             key={post.likes}
        >
            <div className={s.header}>
                <img className={s.avatar} src={post.avatar} alt="avatar"/>
                <span className={s.author}>{post.author}</span>
            </div>
            <div>
                <h1 className={s.title}>{post.title}</h1>
                <p className={s.post}>{post.postText}</p>
            </div>
            <span className={s.likesContainer}>
                Likes
                <span className={s.likes}>{Math.floor(post.likes)}</span>
            </span>
        </div>
    )
    return (
        posts()
    )
}

export default Post