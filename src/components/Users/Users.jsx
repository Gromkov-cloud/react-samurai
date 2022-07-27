import React from "react";
import styles from "./Users.module.css"
import axios from "axios";
import {NavLink} from "react-router-dom";

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.initialPage}&count=${this.props.usersCount}`)
            .then(response => {
                    const usersData = response.data.items
                    const usersCount = response.data.totalCount
                    this.props.setData(usersData, usersCount)
                    this.props.onFetching(false)
                }
            )
    }

    render() {
        return (
            <div className={styles.usersPage}>
                <span className={
                    `${this.props.isFetching ? styles.spinner : styles.spinnerDisabled}`}
                />
                <div className={
                    `${this.props.isFetching ? styles.usersCardsContainerFetching : styles.usersCardsContainer}`}
                >
                    {
                        this.props.users.map(user => (
                            <div className={styles.userCard} key={user.id}>
                                <NavLink to={`/profile/${user.id}`} className={styles.userThumb}>
                                    <img src={user.photos.large ? user.photos.large : "https://imgholder.ru/100x100"}
                                         alt="ava"/>
                                    <button onClick={() => {
                                        this.props.onFollowBtnClick(user.id)
                                    }}>
                                        {user.followed ? "Unfollow" : "Follow"}
                                    </button>
                                </NavLink>
                                <div className={styles.userCardBody}>
                                    <div className={styles.useInfo}>
                                        <span className={styles.userName}>{user.name}</span>
                                        <span
                                            className={
                                            styles.userStatus}>{user.status ? user.status : "Default Status"}
                                        </span>
                                    </div>
                                    <div className={styles.userLocation}>
                                        <span>{user.country ? user.country : "Country is undefined"},</span>
                                        <span>{user.city ? user.city : "City is undefined"}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className={styles.pagination}>
                        <p>Select page:</p>
                        {
                            this.props.buttonsArr.map((button) => (
                                    <span key={button.id}
                                          className={`${styles.paginationBtn} 
                                      ${button.id === this.props.currentPage ? styles.paginationBtnCurrent : ''} 
                                      ${button.style && button.id === 1 ? styles.firstBtnPoints : ""}
                                      ${button.style && button.id !== 1 ? styles.lastBtnPoints : ""}`
                                          }
                                          onClick={() => {
                                              this.props.onPaginationBtnClick(button.id, this.props.usersPerPage)
                                          }}
                                    >
                                    {button.id}
                                </span>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Users