import {connect} from "react-redux";
import Users from "./Users";
import {followToggle, loadMoreUsers} from "../../Redux/reduxSlices/usersSlice";

const mapStateToProps = (props) => (
    {
        users: props.users,
    }
)
const mapDispatchToProps = (dispatch) => (
    {
        onFollowBtnClick(e) {
            dispatch(followToggle(e))
        },
        onLoadMoreBtnClick() {
            dispatch(loadMoreUsers())
        }
    }
)

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer