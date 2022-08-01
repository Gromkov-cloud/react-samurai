import {useState} from "react";

const UserStatus = () => {

    let [editMode, changeEditMode] = useState(false)
    let [status, changeStatus] = useState("Input your status")

    return (
        <>
            {editMode ?
                <input type="text"
                       onChange={(e) => changeStatus(status = e.target.value)}
                       value={status}
                       onBlur={() => changeEditMode(editMode = false)}
                       autoFocus={true}
                />
                :
                <span onClick={() => changeEditMode(editMode = true)}>{status}</span>
            }


        </>
    )
}

export default UserStatus