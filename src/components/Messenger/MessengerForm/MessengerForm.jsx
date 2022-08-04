import {useForm} from "react-hook-form";
import s from "../Messanges.module.css";

const MessengerForm = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm()

    const onmMessageSubmit = (data) => {
        props.onMessageSubmit(data.messageInput)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onmMessageSubmit)}>
            <textarea
                className={s.messageInput}
                {...register("messageInput", {
                    required: {
                        value: true,
                        message: "Enter message"
                    }
                })}
                placeholder="New message"
            />
            <b>{errors?.messageInput && errors.messageInput.message}</b>
            <input type={"submit"} className={s.submitBtn}/>
        </form>
    )
}

export default MessengerForm