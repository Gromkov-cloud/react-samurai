import {connect} from "react-redux";
import Profile from "./Profile";
import {addUserData, addUserDataAC} from "../../Redux/reduxSlices/profileSlice";

const mapStateToProps = (state) => ({
    name: state.profilePage.userData.fullName,
    photoSm: state.profilePage.userData.photos.large,
    status: state.profilePage.userData.aboutMe,
    vk: state.profilePage.userData.contacts.vk,
    job: state.profilePage.userData.lookingForAJob,
    jobDesc: state.profilePage.userData.lookingForAJobDescription,
})

const mapDispatchToProps = (dispatch) => ({
    sendUserData: (data) => {
        dispatch(addUserData(addUserDataAC(data)))
    }
})

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer