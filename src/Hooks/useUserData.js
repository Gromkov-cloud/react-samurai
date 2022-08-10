import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchUserData} from "../Redux/reduxSlices/profileSlice";

export const useUserData = () => {
    const dispatch = useDispatch()
    const userId = +useParams().id
    useEffect(() => {
        dispatch(fetchUserData(userId))
    },[userId])

    return {userId}
}