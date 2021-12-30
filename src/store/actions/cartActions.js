import { createSlice } from "@reduxjs/toolkit";
import { API_REQUEST_BEGAN } from "../types";
import { baseurl } from '../../utils/baseUrl'



//COMBINE USER ACTIONS AND REDUCERS TOGETHER
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        addonsToCartSucceeded: [],
        addonsToCartFailed: [],
        addToCartSucceeded: [],
        addToCartFailed: [],
        deleteFromCartSucceeded: [],
        cartTotal: 0,
        loading: false,
        addToCartLoading: false,
        fetchCartLoading: false,
    },
    reducers: {
        cartRequestBegan: (status) =>{
            status.loading = true
            status.addToCartLoading = true
        },
        getCartItemsBegan: (status) =>{
            status.fetchCartLoading = true
        },
        addItemToCartBegan: (status) =>{
            status.addToCartLoading = true
        },
        getCartItemsSucceeded: (status, action) =>{
            status.cartItems = action.payload.data
            status.fetchCartLoading = false
            status.cartTotal = status.cartItems.reduce((total, num) =>{
                return (total + num.subbouquet.price)
            }, 0)
        },
        getCartItemsFailed: (status, action) =>{
            status.cartItems = action.payload
            status.fetchCartLoading = false
        },
        addItemToCartSucceeded: (status, action) =>{
            if(action.payload.data && action.payload.data[0].subbouquet.description[0] === 'Medical Add-ons'){
                status.cartItems.push(action.payload.data[0])
                status.addonsToCartSucceeded = action.payload
            }
            else if(action.payload.error === true && action.payload.data && action.payload.data[0].subbouquet.description[0] === 'Medical Add-ons'){
                status.addonsToCartFailed = action.payload
            }
            if(action.payload.error === true && action.payload.code === 400){
                status.addToCartFailed = action.payload
                //status.addToCartSucceeded = action.payload
            }
            else if(action.payload.error === false && action.payload.data && action.payload.data[0].subbouquet.description[0] !== 'Medical Add-ons'){
                status.cartItems.push(action.payload.data[0])
                status.addToCartSucceeded = action.payload
            }
            status.loading = false
            status.addToCartLoading = false
        },
        addItemToCartFailed: (status, action) =>{
            status.addToCartSucceeded = action.payload
            status.loading = false
            status.addToCartLoading = false
        },
        deleteItemFromCartSucceeded: (status, action) =>{
            if(action.payload.data[0].subbouquet.description[0] === 'Medical Add-ons'){
                status.cartItems = status.cartItems.filter(item => item.subbouquet.name !== action.payload.data[0].subbouquet.name)
            }
            else{
                status.cartItems = status.cartItems.filter(item => item.subbouquet.name !== action.payload.data[0].subbouquet.name)
            }
            status.deleteFromCartSucceeded = action.payload
            status.cartTotal = status.cartItems.reduce((total, num) =>{
                return (total + num.subbouquet.price)
            }, 0)
            status.loading = false
        },
        deleteItemFromCartFailed: (status, action) =>{
            //status.subBouquets = action.payload
            status.loading = false
        },
        resetState: ( status, action ) => {
            status.addToCartSucceeded = []
            status.addonsToCartSucceeded = []
            status.addToCartFailed = []
            status.deleteFromCartSucceeded = []
            status.loading = false
            status.addToCartLoading= false
            status.fetchCartLoading = false
        }
    }
})

export const getCartItems = () =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/get_cart`,
                onStart: getCartItemsBegan.type,
                onSuccess: getCartItemsSucceeded.type,
                onError: getCartItemsFailed.type,
                method: 'get'
            })
        )
    }
}

export const addItemToCart = (data) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/add_cart`,
                onStart:addItemToCartBegan.type,
                onSuccess: addItemToCartSucceeded.type,
                onError: addItemToCartFailed.type,
                method: 'post',
                data: data
            })
        )
    }
}

export const deleteItemFromCart = (data) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/remove_item`,
                onStart: cartRequestBegan.type,
                onSuccess: deleteItemFromCartSucceeded.type,
                onError: deleteItemFromCartFailed.type,
                method: 'delete',
                data: data
            })
        )
    }
}


export const { 
    cartRequestBegan,
    getCartItemsBegan,
    addItemToCartBegan,
    getCartItemsSucceeded,
    getCartItemsFailed,
    addItemToCartSucceeded,
    addItemToCartFailed,
    deleteItemFromCartSucceeded,
    deleteItemFromCartFailed,
    resetState
} = cartSlice.actions

export default cartSlice.reducer
