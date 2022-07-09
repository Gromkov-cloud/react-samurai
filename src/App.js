import "./App.css";

const App = function () {
  return (
    <div className="page-wrapper">
      <header>
        <span className="logo">ustis</span>
      </header>
      <div className="page-content">
        <aside>
          <nav>
            <ul>
              <li>
                <a href="/plug">My profile</a>
              </li>
              <li>
                <a href="/plug">Newsletter</a>
              </li>
              <li>
                <a href="/plug">messages</a>
              </li>
            </ul>
          </nav>
        </aside>
        <section>
          <img className="user-poster" src="https://media.kg-portal.ru/movies/d/drive/posters/drive_5t.jpg" alt="user-poster"></img>
          <div className="user-page">
            <img className="avatar" src="https://avatarfiles.alphacoders.com/942/94269.jpg" alt="avatar"></img>
            <div className="user-info">
              <p className="user-name">User Name</p>
              <p className="user-birth">User Birth Date</p>
              <p className="user-city">User City</p>
              <p className="user-education">User Education</p>
              <p className="user-site">User Website</p>
            </div>
          </div>

          <div className="user-wall">

          </div>
        </section>
      </div>
    </div>
  )
};

export default App