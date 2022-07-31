import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../Redux/reduxSlices/loginSlice";

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.loginPage.isAuth)
    useEffect(() => {
        dispatch(auth())
    })

    return (
        <header>
            <span className={s.logo}>ustis</span>
            <NavLink to="/login"
                     className={navData => navData.isActive ? `${s.link} ${s.active}` : s.link}
            >
                {isAuth? "":"Please Auth"}
            </NavLink>
        </header>
    )
}

export default Header