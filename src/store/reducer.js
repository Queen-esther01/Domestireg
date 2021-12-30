import { combineReducers } from "redux";
import userSlice from './actions/authActions'
import bouquetSlice from './actions/bouquetActions'
import cartSlice from './actions/cartActions'
import orderSlice from './actions/orderActions'

export default combineReducers({
    user: userSlice,
    bouquet: bouquetSlice,
    cart: cartSlice,
    order: orderSlice
})