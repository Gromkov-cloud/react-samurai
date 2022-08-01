import {NavLink} from "react-router-dom";
import s from "./DialogLink.module.css";

let DialogLinks = (props) => {
    return (
        props.linksData.map((linkData) =>
            <li key={linkData.id}>
                <NavLink to={linkData.id} className={s.link}>
                    {linkData.name}
                </NavLink>
            </li>
        )
    )
}

export default DialogLinks