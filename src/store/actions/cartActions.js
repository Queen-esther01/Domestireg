import { createSlice } from "@reduxjs/toolkit";
import { API_REQUEST_BEGAN } from "../types";
import { baseurl } from '../../utils/baseUrl'



//COMBINE USER ACTIONS AND REDUCERS TOGETHER
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        loading: false,
    },
    reducers: {
        cartRequestBegan: (status) =>{
            status.loading = true
        },
        getCartItemsSucceeded: (status, action) =>{
            status.cart = action.payload
            status.loading = false
        },
        getCartItemsFailed: (status, action) =>{
            status.cart = action.payload
            status.loading = false
        },
        addItemToCartSucceeded: (status, action) =>{
            status.loading = false
        },
        addItemToCartFailed: (status, action) =>{
            //status.subBouquets = action.payload
            status.loading = false
        },
        deleteItemFromCartSucceeded: (status, action) =>{
            status.loading = false
        },
        deleteItemFromCartFailed: (status, action) =>{
            //status.subBouquets = action.payload
            status.loading = false
        }
    }
})

export const getCartItems = () =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/sign_up`,
                onStart: cartRequestBegan.type,
                onSuccess: getCartItemsSucceeded.type,
                onError: getCartItemsFailed.type,
                method: 'get'
            })
        )
    }
}

export const addItemToCart = (id) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/verify`,
                onStart: cartRequestBegan.type,
                onSuccess: addItemToCartSucceeded.type,
                onError: addItemToCartFailed.type,
                method: 'post'
            })
        )
    }
}

export const deleteItemFromCart = (id) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/verify`,
                onStart: cartRequestBegan.type,
                onSuccess: deleteItemFromCartSucceeded.type,
                onError: deleteItemFromCartFailed.type,
                method: 'post'
            })
        )
    }
}


export const { 
    cartRequestBegan,
    getCartItemsSucceeded,
    getCartItemsFailed,
    addItemToCartSucceeded,
    addItemToCartFailed,
    deleteItemFromCartSucceeded,
    deleteItemFromCartFailed
} = cartSlice.actions

export default cartSlice.reducer
