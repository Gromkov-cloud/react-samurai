import {connect} from "react-redux";
import Users from "./Users";
import {
    followToggle,
    followToggleActionCreator,
    loadMoreUsers,
    setUsers,
    setUsersActionCreator
} from "../../Redux/reduxSlices/usersSlice";

const mapStateToProps = (state) => (
    {
        state: state,
        users: state.usersPage.users
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onFollowBtnClick(id) {
            const data = followToggleActionCreator(id)
            dispatch(followToggle(data))
        },
        addNewUsers(users) {
            const data = setUsersActionCreator(users)
            dispatch(setUsers(data))
        },
        onLoadMoreBtnClick() {
            dispatch(loadMoreUsers())
        }
    }
)

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer