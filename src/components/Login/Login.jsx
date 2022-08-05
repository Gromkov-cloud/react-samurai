import LoginForm from "../Forms/LoginForm/LoginFrom";
import {useDispatch} from "react-redux";
import {login} from "../../Redux/reduxSlices/loginSlice";

const Login = () => {
    const dispatch = useDispatch()

    const onLoginFormSubmit = (email, password, rememberMe, captcha) => {
        dispatch(login({email, password, rememberMe, captcha}))
    }

    return (
        <div>
            <LoginForm onLoginFormSubmit={onLoginFormSubmit}/>
        </div>
    )
}

export default Login