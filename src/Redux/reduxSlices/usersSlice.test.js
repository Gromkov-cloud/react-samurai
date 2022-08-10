import {changeStatus} from "./profileSlice";
import reduxStore from "../redux-store";

it('should status change', function () {
    const dispatch = reduxStore.dispatch
    const action = "new status"
    dispatch(changeStatus(action))
    expect(reduxStore.getState().profilePage.userStatus).toBe("new status")
})
