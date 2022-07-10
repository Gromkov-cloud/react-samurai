import s from "./Profile.module.css"

const Profile = () => {
    return (
        <section>
          <img className={s.userPoster} src="https://imgholder.ru/780x150" alt="user-poster"></img>
          <div className={s.userPage}>
            <img className={s.avatar} src="https://imgholder.ru/300x350" alt="avatar"></img>
            <div className={s.userInfo}>
              <p className={s.name}>User Name</p>
              <p className={`${s.birth} ${s.link }`}>User Birth Date</p>
              <p className={`${s.city} ${s.link}`}>User City</p>
              <p className={`${s.link} ${s.education}`}>User Education</p>
              <p className={`${s.link} ${s.site}`}>User Website</p>
            </div>
          </div>

          <div className="user-wall">

          </div>
        </section>
    )
}

export default Profile