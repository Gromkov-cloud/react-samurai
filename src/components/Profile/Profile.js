import Posts from "../Posts/Posts"
import UserStatus from "./UserStatus/UserStatus";
import s from "./Profile.module.css"
import {useLoginRedirect} from "../../Hooks/useLoginRedirect";
import {useUserData} from "../../Hooks/useUserData";
import {useSelector} from "react-redux";

const Profile = (props) => {

    useLoginRedirect()
    const {userId} = useUserData()
    const loggedUserId = useSelector((state) => state.loginPage.userData.id)
    const isProfileOwner = userId === loggedUserId

    return (
        <div>
            <section>
                <img className={s.userPoster} src="https://imgholder.ru/780x150" alt="user-poster"/>
                <div className={s.userPage}>
                    <img className={s.avatar} src={props.photoSm ? props.photoSm : "https://imgholder.ru/350x350"}
                         alt="avatar"/>
                    <div className={s.userInfo}>
                        <p className={s.name}>{props.name}</p>

                        <p className={`${s.link}`}>
                            <UserStatus isStatusChangable={isProfileOwner}/>
                        </p>

                        <p className={`${s.link}`}>vk: {props.vk}</p>
                        {props.job ? <p className={`${s.link}`}>Searching for a job</p> : null}
                        {props.jobDesc ? <p className={`${s.link}`}>About job: {props.jobDesc}</p> : null}
                    </div>
                </div>
            </section>
            <Posts/>
        </div>
    )
}

export default Profile