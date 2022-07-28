import React, {useEffect} from "react";
import styles from "./Users.module.css"
import axios from "axios";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    changeFollowButtonType,
    fetchFollowData,
    setUnfollowData,
} from "../../Redux/reduxSlices/followSlice";

const Users = (props) => {

    const dispatch = useDispatch()
    const followedUserId = useSelector((state) => state.followToggle.followedUserId)
    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.initialPage}&count=${props.usersCount}`, {
                withCredentials: true
            })
            .then(response => {
                    const usersData = response.data.items
                    const usersCount = response.data.totalCount
                    props.setData(usersData, usersCount)
                    props.onFetching(false)
                    dispatch(setUnfollowData(usersData))
                }
            )
    }, [])


    const subscriptions = useSelector(state => state.followToggle.userSubscriptions)

    const onFollowBtnClick = (userId) => {
        dispatch(fetchFollowData(userId))
        dispatch(changeFollowButtonType(userId))
    }

    const followButtonText = (userId) => {
        if (subscriptions.indexOf(userId) === -1) {
            return "Follow"
        } else {
            return "Unfollow"
        }
    }

    return (
        <div className={styles.usersPage}>
                <span className={
                    `${props.isFetching ? styles.spinner : null}`}
                />
            <div className={
                `${props.isFetching ? styles.usersCardsContainerFetching : styles.usersCardsContainer}`}
            >
                {
                    props.users.map(user => (
                        <div className={styles.userCard} key={user.id}>
                            <div className={styles.userThumb}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img
                                        src={user.photos.large ? user.photos.large : "https://imgholder.ru/100x100"}
                                        alt="ava"/>
                                </NavLink>
                                <button
                                    onClick={() => {
                                        onFollowBtnClick(user.id)
                                    }}
                                    disabled={followedUserId.some((id) => id === user.id)}
                                >
                                    {followButtonText(user.id)}
                                </button>
                            </div>
                            <div className={styles.userCardBody}>
                                <div className={styles.useInfo}>
                                    <NavLink to={`/profile/${user.id}`} className={styles.userName}>
                                        {user.name}
                                    </NavLink>
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
                        props.buttonsArr.map((button) => (
                                <span key={button.id}
                                      className={`${styles.paginationBtn} 
                                      ${button.id === props.currentPage ? styles.paginationBtnCurrent : ''} 
                                      ${button.style && button.id === 1 ? styles.firstBtnPoints : ""}
                                      ${button.style && button.id !== 1 ? styles.lastBtnPoints : ""}`
                                      }
                                      onClick={() => {
                                          props.onPaginationBtnClick(button.id, props.usersPerPage)
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

export default Users