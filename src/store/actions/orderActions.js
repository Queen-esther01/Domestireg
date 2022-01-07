import { createSlice } from "@reduxjs/toolkit";
import { API_REQUEST_BEGAN } from "../types";
import { baseurl } from '../../utils/baseUrl'



//COMBINE USER ACTIONS AND REDUCERS TOGETHER
const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
        orderSucceeded: [],
        orderFailed: [],
        uploadSucceeded: [],
        verifyOrder: [],
        loading: false,
        uploadLoading: false,
        paymentLoading: false
    },
    reducers: {
        orderRequestBegan: (status) =>{
            status.loading = true
        },
        uploadImageBegan: (status) =>{
            status.uploadLoading = true
        },
        paymentBegan: (status) =>{
            status.paymentLoading = true
        },
        uploadImageSucceeded: (status, action) =>{
            status.uploadSucceeded = action.payload
            status.uploadLoading = false
        },
        uploadImageFailed: (status, action) =>{
            status.uploadSucceeded = action.payload
            status.uploadLoading = false
        },
        createOrdersSucceeded: (status, action) =>{
            status.orderSucceeded = action.payload
            status.loading = false
        },
        createOrdersFailed: (status, action) =>{
            status.orderFailed = action.payload
            status.loading = false
        },
        getOrdersSucceeded: (status, action) =>{
            status.orders = action.payload.data
            status.loading = false
        },
        getOrdersFailed: (status, action) =>{
            status.orders = action.payload.data
            status.loading = false
        },
        verifyOrderSucceeded: (status, action) =>{
            status.verifyOrder = action.payload
            status.loading = false
        },
        verifyOrderFailed: (status, action) =>{
            status.verifyOrder = action.payload
            status.loading = false
        },
        resetState: ( status, action ) => {
            status.uploadSucceeded = []
            status.orderSucceeded = []
            status.orderFailed = []
            status.verifyOrder = []
        }
    }
})

export const uploadImage = (data) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}upload/file`,
                onStart: uploadImageBegan.type,
                onSuccess: uploadImageSucceeded.type,
                onError: uploadImageFailed.type,
                method: 'post',
                data: data,
                contentType: 'multipart/form-data'
            })
        )
    }
}

export const createOrder = (data) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}create_order`,
                onStart: orderRequestBegan.type,
                onSuccess: createOrdersSucceeded.type,
                onError: createOrdersFailed.type,
                method: 'post',
                data: data,
            })
        )
    }
}

export const getOrders = () =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/get_orders`,
                onStart: orderRequestBegan.type,
                onSuccess: getOrdersSucceeded.type,
                onError: getOrdersFailed.type,
                method: 'get',
            })
        )
    }
}

export const verifyOrders = (data) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/payment/verify`,
                onStart: orderRequestBegan.type,
                onSuccess: verifyOrderSucceeded.type,
                onError: verifyOrderFailed.type,
                method: 'post',
                data: data,
            })
        )
    }
}






export const { 
    orderRequestBegan,
    uploadImageBegan,
    paymentBegan,
    uploadImageSucceeded,
    uploadImageFailed,
    createOrdersSucceeded,
    createOrdersFailed,
    getOrdersSucceeded,
    getOrdersFailed,
    verifyOrderSucceeded,
    verifyOrderFailed,
    resetState
} = orderSlice.actions

export default orderSlice.reducer
