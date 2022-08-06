import {useForm} from "react-hook-form";

const LoginForm = (props) => {

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({mode: "onBlur"})

    const onSubmit = (data) => {
        props.onLoginFormSubmit(data.login,data.password, data.rememberMe, true)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Login
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
                            }
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

                <input type="submit"/>
            </form>
        </>
    )
}

export default LoginForm