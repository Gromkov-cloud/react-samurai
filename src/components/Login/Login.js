import {auth} from "../../Redux/reduxSlices/loginSlice";
import {useDispatch} from "react-redux";

const Login = () => {

    const dispatch = useDispatch()
    const onBtnClick = () => {
        dispatch(auth())
    }

    return (
        <div>
            <h1>Login page</h1>
            <button onClick={onBtnClick}>Login Me</button>
        </div>
    )
}

export default Login