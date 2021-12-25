import { combineReducers } from "redux";
import userSlice from './actions/authActions'

export default combineReducers({
    user: userSlice,
})