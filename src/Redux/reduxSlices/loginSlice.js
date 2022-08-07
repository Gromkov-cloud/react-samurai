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
            dispatch(showError(null))
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
        const data = await response.json()
        if (data.resultCode) {
            dispatch(setLoginError(data.messages))
        } else {
            dispatch(auth())
            dispatch(setLoginError(data.messages))
        }
        return await response.json()
    }
)

export const signOut = createAsyncThunk(
    "loginPage/singOut",
    async (_, {dispatch}) => {
        await loginAPI.signOut()
        dispatch(unsetUserData(false))
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
            isAuth: null,
            loginError: null,
            isLoginBtnDisable: false
        },
        reducers: {
            setUserData: (state, action) => {
                state.userData = action.payload
                !action.payload.resultCode ?
                    state.isAuth = true : state.isAuth = false
            },
            showError: (state, action) => {
                state.error = action.payload
            },
            unsetUserData: (state, action) => {
                state.isAuth = action.payload
                state.userData = {
                    id: null,
                    email: null,
                    login: null,
                }
            },
            setLoginError: (state, action) => {
                state.loginError = action.payload
            }
        },
        extraReducers: {
            [auth.pending]: (state) => {
                state.status = "pending"
            },
            [auth.fulfilled]: (state) => {
                state.status = "successful"
                state.isLoginBtnDisable = false
            },
            [auth.rejected]: (state) => {
                state.status = "Error"
                state.isLoginBtnDisable = false
            },
            [login.pending]: (state) => {
                state.isLoginBtnDisable = true
            },
            [login.rejected]: (state) => {
                state.isLoginBtnDisable = false
            },
        }
    }
)

export const {setUserData, showError, unsetUserData, setLoginError} = loginSlice.actions

export default loginSlice