import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeStatus, setUserStatus} from "../../../Redux/reduxSlices/profileSlice";

const UserStatus = (props) => {

    const dispatch = useDispatch()
    const status = useSelector((state) => state.profilePage.userData.aboutMe)
    let [editMode, changeEditMode] = useState(false)
    const onStatusInputChange = (e) => {
        dispatch(changeStatus(e.target.value))
    }
    const onStatusInputBlur = (e) => {
        changeEditMode(editMode = false)
        dispatch(setUserStatus(e.target.value))
    }

    return (
        <>
            {props.isStatusChangable ?
                editMode ?
                    <input type="text"
                           onChange={e => {
                               onStatusInputChange(e)
                           }}
                           value={status}
                           onBlur={(e) => {onStatusInputBlur(e)}}
                           autoFocus={true}
                    />
                    :
                    <span onClick={() => changeEditMode(editMode = true)}>{status || "Set your status"}</span>
                :
                <span>{status || "Status not set"}</span>
            }
        </>
    )
}

export default UserStatus