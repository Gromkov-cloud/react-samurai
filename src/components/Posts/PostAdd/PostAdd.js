import s from "./PostAdd.module.css"
import React from "react";
import {useForm} from "react-hook-form";

const PostAdd = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm()

    const onFormSubmit = (data) => {
        console.log(data)
        const postData = {
            title: data.postTitle,
            postText: data.postBody
        }
        console.log(postData)
        props.onPostSubmit(postData)
        reset()
    }

    return (

        <form className={s.postContainer}
              onSubmit={handleSubmit(onFormSubmit)}>
            <textarea className={`${s.input} ${s.title}`}
                      {...register("postTitle")}
                      placeholder="Post Title"
            />
            <textarea className={`${s.input} ${s.post}`}
                      {...register("postBody",{
                          required: {
                              value: true,
                              message: "Enter post body"
                          }
                      })}
                      placeholder="Post Body"
            />
            <b>{errors?.postBody && errors.postBody.message}</b>
            <input type="submit" className={s.button}/>
        </form>
    )
}

export default PostAdd