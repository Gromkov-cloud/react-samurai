import {auth} from "../../Redux/reduxSlices/loginSlice";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
    const buttonStatus = useSelector(state => state.loginPage.status)
    const dispatch = useDispatch()
    const onBtnClick = () => {
        dispatch(auth())
    }

    return (
        <div>
            <h1>Login page</h1>
            <button onClick={onBtnClick} disabled={buttonStatus === "pending"}>Login Me</button>
        </div>
    )
}

export default Login