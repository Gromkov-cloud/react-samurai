import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "../Redux/reduxSlices/loginSlice";
import {setAppLoadingStatus} from "../Redux/reduxSlices/appSlice";
import Spinner from "../components/Spinner/Spinner";

const useAppLoading = (App, state) => {
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.appSlice.isLoading)

    useEffect(() => {
        Promise.all([
            dispatch(auth())
        ]).then(responses => dispatch(setAppLoadingStatus(false)))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (isLoading) {
        return <Spinner/>
    } else {
        return <App appState={state}/>
    }
}

export default useAppLoading