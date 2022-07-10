import s from"./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
        <span className={s.logo}>ustis</span>
        <NavLink to="/login"
              className={
                  navData =>
                      navData.isActive ? `${s.link} ${s.active}` : s.link
              }
        >
            Log
        </NavLink>
      </header>
    )
}

export default Header