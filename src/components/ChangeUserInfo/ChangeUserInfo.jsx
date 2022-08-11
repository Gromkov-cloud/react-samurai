import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserInfoThunk, putUserInfoThunk} from "../../Redux/reduxSlices/changeUserInfoSlice";
import styles from "./ChangeUserInfo.module.css"

const ChangeUserInfo = () => {
    const dispatch = useDispatch()
    const ownerId = useSelector((state) => state.loginPage.userData.id)
    const userContacts = useSelector((state) => state.changeUserInfoPage.contacts)
    useEffect(() => {
        dispatch(fetchUserInfoThunk(ownerId))
    }, [])

    const {
        register,
        handleSubmit,
        setValue
    } = useForm()

    const onFormSubmit = (data) => {
        console.log(data)
        dispatch(putUserInfoThunk(data))
    }

    Object.entries(userContacts).forEach(link => setValue(`${link[0]}Link`, link[1]))

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
                {
                    Object.keys(userContacts).map(linkName => (
                            <label key={linkName}>
                                {`set your ${linkName} link:`}
                                <input type="text"
                                       {...register(`${linkName}Link`)}
                                />
                            </label>
                        )
                    )
                }
                <button type={"submit"}>submit</button>
            </form>
        </>
    )
}

export default ChangeUserInfo