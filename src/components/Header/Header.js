import s from"./Header.module.css"

const Header = () => {
    return (
        <header>
        <span className={s.logo}>ustis</span>
        <a className={s.loginLink} href="/plug">Log in</a>
      </header>
    )
}

export default Header