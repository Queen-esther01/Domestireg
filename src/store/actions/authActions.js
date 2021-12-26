import { createSlice } from "@reduxjs/toolkit";
import { API_REQUEST_BEGAN } from "../types";
import { baseurl } from '../../utils/baseUrl'



//COMBINE USER ACTIONS AND REDUCERS TOGETHER
const userSlice = createSlice({
    name: 'users',
    initialState: {
        registration: [],
        verification: [],
        resendVerify: [],
        login: [],
        forgotPassword: [],
        resetPassword: [],
        loading: false,
    },
    reducers: {
        userAuthBegan: (status) =>{
            status.loading = true
        },
        userRegistrationSucceeded: (status, action) =>{
            status.registration = action.payload
            status.loading = false
        },
        userRegistrationFailed: (status, action) =>{
            status.registration = action.payload
            status.loading = false
        },
        userVerificationSucceeded: (status, action) =>{
            status.verification = action.payload
            status.loading = false
            status.resendVerify = []
        },
        userVerificationFailed: (status, action) =>{
            status.verification = action.payload
            status.loading = false
            status.resendVerify = []
        },
        resendVerificationSucceeded: (status, action) =>{
            status.resendVerify = action.payload
            status.loading = false
        },
        resendVerificationFailed: (status, action) =>{
            status.resendVerify = action.payload
            status.loading = false
        },
        userLoginSucceeded: (status, action) =>{
            status.login = action.payload
            status.loading = false
        },
        userLoginFailed: (status, action) =>{
            status.login = action.payload
            status.loading = false
        },
        userForgotPasswordSucceeded: (status, action) =>{
            status.forgotPassword = action.payload
            status.loading = false
        },
        userForgotPasswordFailed: (status, action) =>{
            status.forgotPassword = action.payload
            status.loading = false
        },
        userResetPasswordSucceeded: (status, action) =>{
            status.resetPassword = action.payload
            status.loading = false
        },
        userResetPasswordFailed: (status, action) =>{
            status.resetPassword = action.payload
            status.loading = false
        },
        resetState: ( status, action ) => {
            status.registration = []
            status.verification = []
            status.resendVerify = []
            status.login = []
            status.forgotPassword = []
            status.resetPassword = []
        }
    }
})

export const registerUser = (registerData) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/sign_up`,
                onStart: userAuthBegan.type,
                onSuccess: userRegistrationSucceeded.type,
                onError: userRegistrationFailed.type,
                method: 'post',
                data : registerData
            })
        )
    }
}

export const verifyUser = (verifyData) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/verify`,
                onStart: userAuthBegan.type,
                onSuccess: userVerificationSucceeded.type,
                onError: userVerificationFailed.type,
                method: 'post',
                data : verifyData
            })
        )
    }
}

export const resendVerification = (email) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/resend`,
                onStart: userAuthBegan.type,
                onSuccess: resendVerificationSucceeded.type,
                onError: resendVerificationFailed.type,
                method: 'post',
                data: email
            })
        )
    }
}

export const loginUser = (loginData) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/sign_in`,
                onStart: userAuthBegan.type,
                onSuccess: userLoginSucceeded.type,
                onError: userLoginFailed.type,
                method: 'post',
                data : loginData
            })
        )
    }
}


export const userForgotPassword = (data) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/forgot_password`,
                onStart: userAuthBegan.type,
                onSuccess: userForgotPasswordSucceeded.type,
                onError: userForgotPasswordFailed.type,
                method: 'post',
                data : data
            })
        )
    }
}

export const userResetPassword = (data) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/reset_password`,
                onStart: userAuthBegan.type,
                onSuccess: userResetPasswordSucceeded.type,
                onError: userResetPasswordFailed.type,
                method: 'post',
                data : data
            })
        )
    }
}




export const { 
    userAuthBegan, 
    userRegistrationSucceeded, 
    userRegistrationFailed,
    userLoginSucceeded,
    userLoginFailed,
    userVerificationSucceeded,
    userVerificationFailed,
    resendVerificationSucceeded,
    resendVerificationFailed,
    userForgotPasswordSucceeded,
    userForgotPasswordFailed,
    userResetPasswordSucceeded,
    userResetPasswordFailed,
    resetState,
} = userSlice.actions

export default userSlice.reducer
