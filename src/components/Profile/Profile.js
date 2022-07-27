import Posts from "../Posts/Posts"
import s from "./Profile.module.css"
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchUserData} from "../../Redux/reduxSlices/profileSlice";

const Profile = (props) => {
    const dispatch = useDispatch()
    const userId = useParams().id
    useEffect(() => {
        dispatch(fetchUserData(userId))
    })

    return (
        <div>
            <section>
                <img className={s.userPoster} src="https://imgholder.ru/780x150" alt="user-poster"/>
                <div className={s.userPage}>
                    <img className={s.avatar} src={props.photoSm ? props.photoSm : "https://imgholder.ru/350x350"}
                         alt="avatar"/>
                    <div className={s.userInfo}>
                        <p className={s.name}>{props.name}</p>
                        <p className={`${s.link}`}>About me: {props.status}</p>
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