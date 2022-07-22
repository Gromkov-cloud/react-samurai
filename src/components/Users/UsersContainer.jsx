import {connect} from "react-redux";
import Users from "./Users";
import {
    changePage,
    changePageActionCreator,
    followToggle,
    followToggleActionCreator,
    setInitialData,
    setInitialDataActionCreator
} from "../../Redux/reduxSlices/usersSlice";
import axios from "axios";


const mapStateToProps = (state) => (
    {
        state: state,
        users: state.usersPage.users,
        usersCount: state.usersPage.usersRequestData.usersPerPage,
        initialPage: state.usersPage.usersRequestData.initialPage,
        currentPage: state.usersPage.usersRequestData.currentPage,
        buttonsArr: state.usersPage.usersRequestData.buttonsArr,
        usersPerPage: state.usersPage.usersRequestData.usersPerPage,
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        setData(usersData, totalUsersCount) {
            const data = setInitialDataActionCreator(usersData, totalUsersCount)
            dispatch(setInitialData(data))
        },
        onFollowBtnClick(id) {
            const data = followToggleActionCreator(id)
            dispatch(followToggle(data))
        },
        onPaginationBtnClick(buttonId, usersPerPage) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${buttonId}&count=${usersPerPage}`)
                .then(response => {
                        const data = changePageActionCreator(response.data, buttonId)
                        dispatch(changePage(data))
                    }
                )

        }
    }
)

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer