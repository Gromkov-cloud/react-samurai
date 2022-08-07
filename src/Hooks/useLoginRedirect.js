import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export const useLoginRedirect = () => {
    const isAuth = useSelector(state => state.loginPage.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        !isAuth && navigate("/login")
    },[]) // eslint-disable-line react-hooks/exhaustive-deps
}