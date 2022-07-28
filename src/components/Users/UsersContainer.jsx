import {connect} from "react-redux";
import Users from "./Users";
import {
    changeFetchingStatus,
    changeFetchingStatusActionCreator,
    changePage,
    changePageActionCreator,
    followToggle,
    followToggleActionCreator,
    setInitialData,
    setInitialDataActionCreator
} from "../../Redux/reduxSlices/usersSlice";
import axios from "axios";
import {changeFollowButtonType, setUnfollowData} from "../../Redux/reduxSlices/followSlice";


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
        setData(usersData, totalUsersCount) {
            const data = setInitialDataActionCreator(usersData, totalUsersCount)
            dispatch(setInitialData(data))
        },
        onFollowBtnClick(id) {
            const data = followToggleActionCreator(id)
            dispatch(followToggle(data))
        },
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

        },
        onFetching(isFetching) {
            const data = changeFetchingStatusActionCreator(isFetching)
            dispatch(changeFetchingStatus(data))
        }
    }
)

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer