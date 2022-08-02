import {connect} from "react-redux";
import Profile from "./Profile";

const mapStateToProps = (state) => ({
    name: state.profilePage.userData.fullName,
    photoSm: state.profilePage.userData.photos.large,
    vk: state.profilePage.userData.contacts.vk,
    job: state.profilePage.userData.lookingForAJob,
    jobDesc: state.profilePage.userData.lookingForAJobDescription,
})


const ProfileContainer = connect(mapStateToProps, {})(Profile)
export default ProfileContainer