import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setUnfollowData} from "./followSlice";
import {usersAPI} from "../../API/usersAPI";

export const fetchUsers = createAsyncThunk(
    "usersPage/fetchUsers",
    async (_, {dispatch, getState}) => {
        const {initialPage, usersPerPage} = getState().usersPage.usersRequestData

        const response = await usersAPI.fetchUsers(initialPage, usersPerPage)
        const data = await response.json()

        const users = data.items
        dispatch(setInitialData(setInitialDataActionCreator(users, data.totalCount)))
        dispatch(setUnfollowData(users))
    }
)


const usersSlice = createSlice({
    name: "usersPage",
    initialState: {
        users: [],
        usersRequestData: {
            initialPage: 1,
            currentPage: 1,
            usersPerPage: 3,
            totalUsersCount: [],
            buttonsToShow: 5,
            buttonsArr: [],
            lastBtnId: 0,
        },
        isFetching: true,
    },
    reducers: {
        setInitialData: (state, action) => {
            const totalUsersCount = action.payload.totalUsersCount
            let buttonsCount = Math.ceil(totalUsersCount / state.usersRequestData.usersPerPage)
            const buttonsArr = []
            const buttonsToShow = state.usersRequestData.buttonsToShow

            if (buttonsCount >= buttonsToShow) {
                for (let i = 1; i <= buttonsToShow; i++) {
                    buttonsArr.push({id: i,}
                    )
                    if (i === buttonsToShow) {

                    }
                }
                buttonsArr.push({id: buttonsCount, style: "lastBtnPoint"})
            } else {
                for (let i = 1; i <= state.usersRequestData.buttonsToShow; i++) {
                    buttonsArr.push(
                        {
                            id: i,
                            current: false
                        }
                    )
                }
                buttonsArr[0].current = true

            }

            state.users = action.payload.usersData
            state.usersRequestData.totaluUsersCount = totalUsersCount
            state.usersRequestData.buttonsArr = buttonsArr
            state.usersRequestData.currentPage = 1
            state.usersRequestData.lastBtnId = buttonsArr[buttonsArr.length - 2].id
        },
        followToggle: (state, action) => {
            const userId = action.payload.id

            state.users.forEach(user => {
                if (user.id === userId) {
                    user.followed = !user.followed;
                }
            })
        },
        changePage: (state, action) => {
            const btnId = action.payload.buttonId
            const totalUsersCount = action.payload.data.totalCount
            const pagesCount = Math.ceil(totalUsersCount / state.usersRequestData.usersPerPage)
            const lastBtnId = state.usersRequestData.lastBtnId
            const buttonsToShow = state.usersRequestData.buttonsToShow
            const newBtnArr = []

            // generating buttons array
            //  when current page in middle
            if (btnId - 1 >= lastBtnId - btnId && btnId < pagesCount - Math.floor(buttonsToShow / 2)) {
                for (let i = btnId - Math.floor(buttonsToShow / 2); i <= btnId + Math.floor(buttonsToShow / 2); i++) {
                    newBtnArr.push({id: i})
                }

                // last btn styling
                if (btnId < pagesCount - Math.ceil(buttonsToShow / 2)) {
                    newBtnArr.push({id: pagesCount, style: "lastBtnPoints"})
                } else {
                    newBtnArr.push({id: pagesCount})
                }

                // first btn styling
                if (btnId - 2 > lastBtnId - btnId) {
                    newBtnArr.unshift({id: 1,})
                }

                if (btnId - 3 > lastBtnId - btnId) {
                    newBtnArr[0].style = "firstBtnPoints"
                }

                // array when current page in firsts pages
            } else if (btnId <= lastBtnId - btnId) {
                for (let i = 1; i <= buttonsToShow; i++) {
                    newBtnArr.push({id: i})
                }
                newBtnArr.push({id: pagesCount, style: "lastBtnPoints"})

                // array when current page in lasts pages
            } else if (btnId >= pagesCount - Math.floor(buttonsToShow / 2)) {
                for (let i = pagesCount - buttonsToShow; i <= pagesCount; i++) {
                    newBtnArr.push({id: i})
                }
                newBtnArr.unshift({id: 1, style: "firstBtnPoints"})
            }

            state.usersRequestData.buttonsArr = newBtnArr
            state.usersRequestData.currentPage = btnId
            state.users = action.payload.data.items
        },
        changeFetchingStatus: (state, action) => {
            state.isFetching = action.payload.isFetching
        },
    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.isFetching = true
        },
        [fetchUsers.fulfilled]: (state) => {
            state.isFetching = false
        },
        [fetchUsers.rejected]: (state) => {
            state.isFetching = false
        },
    }
})

export const followToggleActionCreator = (userId) => ({
    id: userId,
})
export const setInitialDataActionCreator = (usersData, totalUsersCount) => ({
    usersData: usersData,
    totalUsersCount: totalUsersCount,
})
export const changePageActionCreator = (data, buttonId) => ({
    data: data,
    buttonId: buttonId,
})
export const changeFetchingStatusActionCreator = (isFetching) => ({
    isFetching: isFetching,
})


export const {followToggle, changePage, setInitialData, changeFetchingStatus} = usersSlice.actions

export default usersSlice