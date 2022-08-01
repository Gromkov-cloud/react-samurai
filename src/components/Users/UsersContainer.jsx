import {connect} from "react-redux";
import Users from "./Users";


const mapStateToProps = (state) => (
    {
        state: state,
        users: state.usersPage.users,
        usersCount: state.usersPage.usersRequestData.usersPerPage,
        initialPage: state.usersPage.usersRequestData.initialPage,
        currentPage: state.usersPage.usersRequestData.currentPage,
        buttonsArr: state.usersPage.usersRequestData.buttonsArr,
        usersPerPage: state.usersPage.usersRequestData.usersPerPage,
        isFetching: state.usersPage.isFetching
    }
)

const UsersContainer = connect(mapStateToProps, {})(Users)

export default UsersContainer