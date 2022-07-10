import s from "./Messanges.module.css"
import {NavLink} from "react-router-dom";

const Messanges = () => {
    return (
        <div>
            <div className={s.peopleList}>
                <ul>
                    <li>
                        <NavLink to="1">
                            Andrey
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="2">
                            Sergey
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="3">
                            Vladislav
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="4">
                            Victor
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="5">
                            Semen
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className={s.messanger}></div>
        </div>
    )
}

export default Messanges