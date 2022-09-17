import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        isLoading: true
    },
    reducers: {
        setAppLoadingStatus: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const {setAppLoadingStatus} = appSlice.actions

export default appSlice