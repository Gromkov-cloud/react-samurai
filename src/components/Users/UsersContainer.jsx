import {connect} from "react-redux";
import Users from "./Users";
import {
    changeFetchingStatus,
    changePage,
    changePageActionCreator,
} from "../../Redux/reduxSlices/usersSlice";
import axios from "axios";
import {setUnfollowData} from "../../Redux/reduxSlices/followSlice";


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

const mapDispatchToProps = (dispatch) => (
    {
        onPaginationBtnClick(buttonId, usersPerPage) {
            dispatch(changeFetchingStatus({isFetching: true}))
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${buttonId}&count=${usersPerPage}`, {
                    withCredentials: true
                })
                .then(response => {
                        const data = changePageActionCreator(response.data, buttonId)
                        dispatch(changePage(data))
                        dispatch(changeFetchingStatus({isFetching: false}))
                        dispatch(setUnfollowData(data.data.items))
                    }
                )

        }
    }
)

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer