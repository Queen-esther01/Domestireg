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
        payment: [],
        verifyPayment: [],
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
        makePaymentSucceeded: (status, action) =>{
            status.payment = action.payload
            status.paymentLoading = false
        },
        makePaymentFailed: (status, action) =>{
            status.payment = action.payload
            status.paymentLoading = false
        },
        verifyPaymentSucceeded: (status, action) =>{
            status.verifyPayment = action.payload
            status.loading = false
        },
        verifyPaymentFailed: (status, action) =>{
            status.verifyPayment = action.payload
            status.loading = false
        },
        resetState: ( status, action ) => {
            status.uploadSucceeded = []
            status.orderSucceeded = []
            status.orderFailed = []
            status.verifyPayment = []
            status.payment = []
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

export const makePayment = () =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/get_orders`,
                onStart: paymentBegan.type,
                onSuccess: makePaymentSucceeded.type,
                onError: makePaymentFailed.type,
                method: 'get',
            })
        )
    }
}

export const verifyPayment = () =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/get_orders`,
                onStart: orderRequestBegan.type,
                onSuccess: verifyPaymentSucceeded.type,
                onError: verifyPaymentFailed.type,
                method: 'post',
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
    makePaymentSucceeded,
    makePaymentFailed,
    verifyPaymentSucceeded,
    verifyPaymentFailed,
    resetState
} = orderSlice.actions

export default orderSlice.reducer
