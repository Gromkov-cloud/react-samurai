import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginAPI} from "../../API/loginAPI";

export const auth = createAsyncThunk(
    "loginPage/auth",
    async (_, {dispatch, getState}) => {
        try {
            const response = await loginAPI.auth()

            const data = await response.json()

            if (data.resultCode) {
                throw new Error(data.messages)
            }

            dispatch(setUserData(data.data))

            return data

        } catch (e) {
            dispatch(showError(e.message))
            getState().loginPage.isAuth = false
        }
    }
)

export const login = createAsyncThunk(
    "loginPage/login",
    async ({email, password, rememberMe, captcha}, {dispatch}) => {
        const response = await loginAPI.login(email, password, rememberMe, captcha)
        dispatch(auth())
        console.log(await response.json())
    }
)

const loginSlice = createSlice({
        name: "loginPage",
        initialState: {
            userData: {
                id: null,
                email: null,
                login: null,
            },
            status: null,
            error: null,
            isAuth: null
        },
        reducers: {
            setUserData: (state, action) => {
                state.userData = action.payload
                !action.payload.resultCode ?
                    state.isAuth = true : state.isAuth = false
            },
            showError: (state, action) => {
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