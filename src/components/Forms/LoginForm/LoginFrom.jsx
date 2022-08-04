import {useForm} from "react-hook-form";

const LoginForm = () => {

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({mode: "onBlur"})

    const onSubmit = (data, formState) => {
        alert(`Form is submitted, login: ${data.login || "not set"}, password: ${data.password || "not set"}`)
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

                <input type="submit"/>
            </form>
        </>
    )
}

export default LoginForm