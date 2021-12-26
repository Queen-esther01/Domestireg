import { createSlice } from "@reduxjs/toolkit";
import { API_REQUEST_BEGAN } from "../types";
import { baseurl } from '../../utils/baseUrl'



//COMBINE USER ACTIONS AND REDUCERS TOGETHER
const bouquetSlice = createSlice({
    name: 'bouquet',
    initialState: {
        bouquets: [],
        subBouquets: [],
        loading: false,
    },
    reducers: {
        bouquetRequestBegan: (status) =>{
            status.loading = true
        },
        getBouquetsSucceeded: (status, action) =>{
            status.bouquets = action.payload
            status.loading = false
        },
        getBouquetsFailed: (status, action) =>{
            status.bouquets = action.payload
            status.loading = false
        },
        getSubBouquetsSucceeded: (status, action) =>{
            status.subBouquets = action.payload
            status.loading = false
        },
        getSubBouquetsFailed: (status, action) =>{
            status.subBouquets = action.payload
            status.loading = false
        }
    }
})

export const getBouquets = () =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/sign_up`,
                onStart: bouquetRequestBegan.type,
                onSuccess: getBouquetsSucceeded.type,
                onError: getBouquetsSucceeded.type,
                method: 'get'
            })
        )
    }
}

export const verifyUser = (id) =>{
    return (dispatch) => {
        dispatch(
            API_REQUEST_BEGAN({
                url: `${baseurl}user/verify`,
                onStart: bouquetRequestBegan.type,
                onSuccess: getSubBouquetsSucceeded.type,
                onError: getSubBouquetsFailed.type,
                method: 'get'
            })
        )
    }
}


export const { 
    bouquetRequestBegan,
    getBouquetsSucceeded,
    getBouquetsFailed,
    getSubBouquetsSucceeded,
    getSubBouquetsFailed
} = bouquetSlice.actions

export default bouquetSlice.reducer
