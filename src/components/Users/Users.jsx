import styles from "./Users.module.css"

const Users = (props) => {
    const mapUsersToHtml = props.users.map(user => (
        <div className={styles.userCard} key={user.id}>
            <div className={styles.userThumb}>
                <img src="https://imgholder.ru/112x112" alt="ava"/>
                <button onClick={props.onFollowBtnClick}>Follow</button>
            </div>
            <div className={styles.userCardBody}>
                <div className={styles.useInfo}>
                    <span className={styles.userName}>{user.name}</span>
                    <span className={styles.userStatus}>{user.description}</span>
                </div>
                <div className={styles.userLocation}>
                    <span>{user.country},</span>
                    <span>{user.city}</span>
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