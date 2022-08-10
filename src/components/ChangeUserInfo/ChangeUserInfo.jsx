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
        dispatch(putUserInfoThunk(data))
    }

    setValue("vkLink", userContacts.vk)
    setValue("githubLink", userContacts.github)
    setValue("facebookLink", userContacts.facebook)
    setValue("instagramLink", userContacts.instagram)
    setValue("twitterLink", userContacts.twitter)
    setValue("websiteLink", userContacts.website)
    setValue("youtubeLink", userContacts.youtube)

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
                <label>
                    set your vk link:
                    <input type="text"
                           {...register("vkLink")}
                    />
                </label>
                <label>
                    set your github link:
                    <input type="text"
                           {...register("githubLink")}
                    />
                </label>
                <label>
                    set your facebook link:
                    <input type="text"
                           {...register("facebookLink")}
                    />
                </label>
                <label>
                    set your instagram link:
                    <input type="text"
                           {...register("instagramLink")}
                    />
                </label>
                <label>
                    set your twitter link:
                    <input type="text"
                           {...register("twitterLink")}
                    />
                </label>
                <label>
                    set your website link:
                    <input type="text"
                           {...register("websiteLink")}
                    />
                </label>
                <label>
                    set your youtube link:
                    <input type="text"
                           {...register("youtubeLink")}
                    />
                </label>
                <button type={"submit"}>submit</button>
            </form>
        </>
    )
}

export default ChangeUserInfo