import styles from "./Users.module.css"
import axios from "axios";

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            const users = response.data.items
            console.log(users)
            props.addNewUsers(users)
        })
    }

    const mapUsersToHtml = props.users.map(user => (
        <div className={styles.userCard} key={user.id}>
            <div className={styles.userThumb}>
                <img src={user.photos.large ? user.photos.large : "https://imgholder.ru/100x100"} alt="ava"/>
                <button onClick={() => {
                    props.onFollowBtnClick(user.id)
                }}>
                    {user.followed ? "Unfollow" : "Follow"}
                </button>
            </div>
            <div className={styles.userCardBody}>
                <div className={styles.useInfo}>
                    <span className={styles.userName}>{user.name}</span>
                    <span className={styles.userStatus}>{user.status ? user.status : "Default Status"}</span>
                </div>
                <div className={styles.userLocation}>
                    <span>{user.country ? user.country : "Country is undefined"},</span>
                    <span>{user.city ? user.city : "City is undefined"}</span>
                </div>
            </div>
        </div>
    ))

    return (
        <div className={styles.usersCardsContainer}>
            {mapUsersToHtml}
            <button className={styles.loadMoreBtn}>Load more</button>
        </div>
    )
}

export default Users