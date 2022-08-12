import Posts from "../Posts/Posts"
import UserStatus from "./UserStatus/UserStatus";
import s from "./Profile.module.css"
import {useLoginRedirect} from "../../Hooks/useLoginRedirect";
import {useUserData} from "../../Hooks/useUserData";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getUserAvatar, setUserAvatar} from "../../Redux/reduxSlices/profileSlice";

const Profile = (props) => {

    useLoginRedirect()
    const dispatch = useDispatch()
    const {userId} = useUserData()
    const loggedUserId = useSelector((state) => state.loginPage.userData.id)
    const userInfo = useSelector((state) => state.profilePage.userData)
    const isProfileOwner = userId === loggedUserId

    const onPhotoInputChange = (e) => {
        const uploadedImage = e.target.files[0]
        const data = new FormData()
        data.append("image", uploadedImage)

        Promise.all([
            dispatch(setUserAvatar(data))
        ]).then(response => dispatch(getUserAvatar(userId)))
    }

    return (
        <div>
            <section>
                <img className={s.userPoster} src="https://imgholder.ru/780x150" alt="user-poster"/>
                <div className={s.userPage}>
                    <div>
                        <img className={s.avatar}
                             src={userInfo.photos.large || "https://imgholder.ru/350x350"}
                             alt="avatar"/>
                        <input type="file" onChange={(e) => onPhotoInputChange(e)}/>
                    </div>
                    <div className={s.userInfo}>
                        <p className={s.name}>{userInfo.fullName}</p>
                        <p className={`${s.link}`}><UserStatus isStatusChangable={isProfileOwner} userId={userId}/></p>
                        {userInfo.aboutMe && <p className={`${s.link}`}>About me: {userInfo.aboutMe}</p>}
                        {userInfo.lookingForAJob && <p className={`${s.link}`}>Searching for a job</p>}
                        {userInfo.lookingForAJobDescription &&
                            <p className={`${s.link}`}>About job: {userInfo.lookingForAJobDescription}</p>
                        }
                        {userInfo.contacts.vk &&
                            <div>
                                <span className={`${s.link}`}>vk: </span>
                                <Link to={`//${userInfo.contacts.vk}`}
                                      className={`${s.link}`}
                                      target="_blank"
                                >
                                    {userInfo.contacts.vk}
                                </Link>
                            </div>
                        }
                        {userInfo.contacts.facebook &&
                            <div>
                                <span className={`${s.link}`}>facebook: </span>
                                <Link to={`//${userInfo.contacts.facebook}`}
                                      className={`${s.link}`}
                                      target="_blank"
                                >
                                    {userInfo.contacts.facebook}
                                </Link>
                            </div>
                        }
                        {userInfo.contacts.twitter &&
                            <div>
                                <span className={`${s.link}`}>twitter: </span>
                                <Link to={`//${userInfo.contacts.twitter}`}
                                      className={`${s.link}`}
                                      target="_blank"
                                >
                                    {userInfo.contacts.twitter}
                                </Link>
                            </div>
                        }
                        {userInfo.contacts.instagram &&
                            <div>
                                <span className={`${s.link}`}>instagram: </span>
                                <Link to={`//${userInfo.contacts.instagram}`}
                                      className={`${s.link}`}
                                      target="_blank"
                                >
                                    {userInfo.contacts.instagram}
                                </Link>
                            </div>
                        }
                        {userInfo.contacts.website &&
                            <div>
                                <span className={`${s.link}`}>website: </span>
                                <Link to={`//${userInfo.contacts.website}`}
                                      className={`${s.link}`}
                                      target="_blank"
                                >
                                    {userInfo.contacts.website}
                                </Link>
                            </div>
                        }
                        {userInfo.contacts.github &&
                            <div>
                                <span className={`${s.link}`}>github: </span>
                                <Link to={`//${userInfo.contacts.github}`}
                                      className={`${s.link}`}
                                      target="_blank"
                                >
                                    {userInfo.contacts.github}
                                </Link>
                            </div>
                        }
                        {isProfileOwner && <div><Link to="/change-user-info">Change your information</Link></div>}
                    </div>
                </div>
            </section>
            <Posts/>
        </div>
    )
}

export default Profile