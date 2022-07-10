import s from"./Sidebar.module.css"

const Sidebar = () => {
    return (
        <aside>
          <nav>
            <ul className={s.list}>
              <li className={s.item}>
                <a href="/plug" className={s.link}>My profile</a>
              </li>
              <li className={s.item}>
                <a href="/plug" className={s.link}>Newsletter</a>
              </li>
              <li className={s.item}>
                <a href="/plug" className={s.link}>messages</a>
              </li>
            </ul>
          </nav>
        </aside>
    )
}

export default Sidebar