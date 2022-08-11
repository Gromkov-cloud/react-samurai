import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserInfoThunk, putUserInfoThunk} from "../../Redux/reduxSlices/changeUserInfoSlice";
import styles from "./ChangeUserInfo.module.css"

const ChangeUserInfo = () => {
    const dispatch = useDispatch()
    const ownerId = useSelector((state) => state.loginPage.userData.id)
    const userInfo = useSelector((state)=> state.changeUserInfoPage.userInfo)

    useEffect(() => {
        dispatch(fetchUserInfoThunk(ownerId))
    }, [])

    const {
        register,
        handleSubmit,
        setValue
    } = useForm()

    const onFormSubmit = (data) => {
        dispatch(putUserInfoThunk(data))
    }

    Object.entries(userInfo.contacts).forEach(link => setValue(`${link[0]}Link`, link[1]))
    Object.entries(userInfo.mainInfo).forEach(link => setValue(`${link[0]}`, link[1]))

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
                <div>
                    <h1>Main information</h1>
                    <label>
                        Write yor full name
                        <input type="text"
                               {...register("fullName")}
                        />
                    </label>
                    <label>
                        Write something about yourself
                        <input type="text"
                               {...register("aboutMe")}
                        />
                    </label>
                    <label>
                        Looking for a job?
                        <input type="checkbox"
                               {...register("lookingForAJob")}
                        />
                    </label>
                    <label>
                        Write about work
                        <input type="text"
                               {...register("lookingForAJobDescription")}
                        />
                    </label>

                </div>
                <div>
                    <h1>Social links</h1>
                    {
                        Object.keys(userInfo.contacts).map(linkName => (
                                <label key={linkName}>
                                    {`set your ${linkName} link:`}
                                    <input type="text"
                                           {...register(`${linkName}Link`)}
                                    />
                                </label>
                            )
                        )
                    }
                </div>
                <button type={"submit"}>submit</button>
            </form>
        </>
    )
}

export default ChangeUserInfo