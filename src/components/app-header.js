import logo from "../logo.svg";
import "./app-header.css"

const Header = () => {
    return (
        <div className="header">
            <a href="/#">
                <img className="header__logo" src={logo} alt="logo"></img>
            </a>
            <div className="navbar">
                <ul>
                    <li>
                        <a href="/none">HOME</a>
                    </li>
                    <li>
                        <a href="/nothing">ABOUT US</a>
                    </li>
                    <li>
                        <a href="/no">PORTFOLIO</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;