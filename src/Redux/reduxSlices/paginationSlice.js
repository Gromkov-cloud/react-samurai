import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {paginationAPI} from "../../API/paginationAPI";
import {changeFetchingStatus, changePage, changePageActionCreator} from "./usersSlice";
import {setUnfollowData} from "./followSlice";

export const fetchUsersPage = createAsyncThunk(
    "pagination/fetchUsersPage",
    async (pageNum, {dispatch, getState}) => {
        dispatch(changeFetchingStatus(true))
        const usersCount = getState().usersPage.usersRequestData.usersPerPage
        const data = await paginationAPI.fetchUsersPage(pageNum, usersCount)

        dispatch(changePage(changePageActionCreator(data, pageNum)))
        dispatch(changeFetchingStatus(false))
        dispatch(setUnfollowData(data.data.items))
    }
)

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {},
    reducers: {},
    extraReducers: {}
})

export default paginationSlice