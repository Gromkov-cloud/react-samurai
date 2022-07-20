import {connect} from "react-redux";
import Users from "./Users";
import {followToggle, followToggleActionCreator, loadMoreUsers} from "../../Redux/reduxSlices/usersSlice";

const mapStateToProps = (state) => (
    {
        users: state.usersPage.users
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onFollowBtnClick(id) {
            const data = followToggleActionCreator(id)
            dispatch(followToggle(data))
        },
        onLoadMoreBtnClick() {
            dispatch(loadMoreUsers())
        }
    }
)

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer