import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";

const LoginForm = (props) => {

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        reset
    } = useForm({mode: "onBlur"})

    const loginError = useSelector((state) => state.loginPage.loginError)
    const isDisable = useSelector((state) => state.loginPage.isLoginBtnDisable)
    const isAuth = useSelector((state) => state.loginPage.isAuth)

    const onSubmit = (data) => {
        props.onLoginFormSubmit(data.login, data.password, data.rememberMe, true)
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Email
                    <input
                        {...register("login", {
                            required: {
                                value: true,
                                message: "Enter login"
                            },
                            minLength: {
                                value: 3,
                                message: "Minimal login length - 3"
                            }
                        })}
                        type="text"
                        placeholder={"Login"}
                    />
                </label>
                <p>{errors?.login && errors.login.message}</p>
                <label>
                    Password
                    <input
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Enter password"
                            },
                            minLength: {
                                value: 3,
                                message: "Minimal length - 3"
                            },
                            disabled: {}
                        })}
                        type="password"
                        placeholder={"Password"}/>
                </label>
                <p>{errors?.password && errors.password.message}</p>

                <label>
                    Remember Me
                    <input type="checkbox"
                           {...register("rememberMe")}
                    />
                </label>

                <button type="submit" disabled={isDisable || isAuth}>Submit</button>

                {isAuth ? <p><b>You are authorized</b></p> : null}

                {
                    loginError ?
                        loginError.map(error => <p key={error}>{error}</p>)
                        : null
                }

            </form>
        </>
    )
}

export default LoginForm