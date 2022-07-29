import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginAPI} from "../../API/loginAPI";

export const auth = createAsyncThunk(
    "login/auth",
    async (_, {dispatch}) => {
        try {
            const response = await loginAPI.login()
            const data = await response.json()

            if (data.resultCode) {
                throw new Error(data.messages)
            }

            dispatch(setUserData(data.data))
            return data

        } catch (e) {
            dispatch(showError(e.message))
        }
    }
)

const loginSlice = createSlice({
        name: "login",
        initialState: {
            userData: {
                id: null,
                email: null,
                login: null,
            },
            status: null,
            error: null
        },
        reducers: {
            setUserData: (state, action) => {
                state.userData = action.payload
            },
            showError: (state, action) => {
                console.log(action.payload)
                state.error = action.payload
            }
        },
        extraReducers: {
            [auth.pending]: (state) => {
                state.status = "pending"
            },
            [auth.fulfilled]: (state) => {
                state.status = "successful"
            },
            [auth.rejected]: (state) => {
                state.status = "Error"
            }
        }
    }
)

export const {setUserData, showError} = loginSlice.actions

export default loginSlice