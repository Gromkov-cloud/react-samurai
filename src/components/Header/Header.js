import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {auth, signOut} from "../../Redux/reduxSlices/loginSlice";

const Header = () => {
    const userName = useSelector((state)=>state.loginPage.userData.login)
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.loginPage.isAuth)
    useEffect(() => {
        dispatch(auth())
    })

    const handleClick = () => {
        dispatch(signOut())
    }

    return (
        <header>
            <span className={s.logo}>ustis</span>
            {
                !isAuth ? <NavLink to="/login"
                                   className={navData => navData.isActive ? `${s.link} ${s.active}` : s.link}
                    >
                        {isAuth ? "" : "Please Auth"}
                    </NavLink>
                    :  <><b>{userName}</b> <span className={s.signOut} onClick={handleClick}>Sign Out</span></>
            }


        </header>
    )
}

export default Header