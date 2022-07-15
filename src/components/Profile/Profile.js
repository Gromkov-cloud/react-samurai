import Posts from "../Posts/Posts"
import s from "./Profile.module.css"

const Profile = (props) => {
    return (
        <div>
            <section>
                <img className={s.userPoster} src="https://imgholder.ru/780x150" alt="user-poster"/>
                <div className={s.userPage}>
                    <img className={s.avatar} src="https://imgholder.ru/300x350" alt="avatar"/>
                    <div className={s.userInfo}>
                        <p className={s.name}>User Name</p>
                        <p className={`${s.link} ${s.birth}`}>User Birth Date</p>
                        <p className={`${s.link} ${s.city}`}>User City</p>
                        <p className={`${s.link} ${s.education}`}>User Education</p>
                        <p className={`${s.link} ${s.site}`}>User Website</p>
                    </div>
                </div>
            </section>
            <Posts
                appState={props.appState}
                dispatch={props.dispatch}
            />
        </div>

    )
}

export default Profile