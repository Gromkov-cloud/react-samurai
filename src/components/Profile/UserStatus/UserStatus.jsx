import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeStatus, getUserStatus, setUserStatus} from "../../../Redux/reduxSlices/profileSlice";
import styles from "./UserStatus.module.css"

const UserStatus = (props) => {

    const dispatch = useDispatch()
    const status = useSelector((state) => state.profilePage.userStatus)
    let [editMode, changeEditMode] = useState(false)
    const onStatusInputChange = (e) => {
        dispatch(changeStatus(e.target.value))
    }
    const onStatusInputBlur = (e) => {
        changeEditMode(editMode = false)
        dispatch(setUserStatus(e.target.value))
    }

    useEffect(() => {
        dispatch(getUserStatus(props.userId))
    },[props.userId])

    return (
        <>
            {props.isStatusChangable ?
                editMode ?
                    <input type="text"
                           onChange={e => {
                               onStatusInputChange(e)
                           }}
                           value={status}
                           onBlur={(e) => {
                               onStatusInputBlur(e)
                           }}
                           autoFocus={true}
                    />
                    :
                    <span onClick={() => changeEditMode(editMode = true)}>
                        {status || "Set your status"}
                        <span className={styles.statusChange}> click to change status</span>
                    </span>
                :
                <span>{status || "Status not set"}</span>
            }
        </>
    )
}

export default UserStatus