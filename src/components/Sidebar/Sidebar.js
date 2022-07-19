import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <ul className={s.list}>
                    <li className={s.item}>
                        <NavLink to="/"
                                 className={navData => navData.isActive ? `${s.link} ${s.active}` : s.link}
                        >
                            My profile
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/users"
                                 className={navData => navData.isActive ? `${s.link} ${s.active}` : s.link}
                        >
                            Find Users
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/messages"
                                 className={navData => navData.isActive ? `${s.link} ${s.active}` : s.link}
                        >
                            Messages
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/newsletter"
                                 className={navData => navData.isActive ? `${s.link} ${s.active}` : s.link}
                        >
                            Newsletter
                        </NavLink>
                    </li>

                    <li className={s.item}>
                        <NavLink to="/music"
                                 className={navData => navData.isActive ? `${s.link} ${s.active}` : s.link}
                        >
                            Music
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar