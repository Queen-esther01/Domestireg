import axios from 'axios'
import * as actions from '../types'
import cookie from 'react-cookies'




const requests = ({dispatch}) => next => async action =>{
    
    const token = cookie.load('dreg');
    //IF ACTION NOT API REQUEST BEGAN THEN END PROCESS
    if(action.type !== actions.API_REQUEST_BEGAN.type){
        return next(action)
    }

    const { url, method, onStart, onSuccess, onError, data, contentType } = action.payload

    //console.log(contentType)

    if(onStart) dispatch({ type: onStart})

    next(action)

    try{
        const response = await axios.request({
            url,
            method,
            data,
            headers: {
                // Authorization: `Bearer ${token}`,
                'Content-Type': contentType || 'application/json',
                'Accept': 'application/json'
            }
        })
        if(response) dispatch({ type: onSuccess, payload: response.data})
        console.log(response.data)
    } catch(error){
        if(error.response) {
            dispatch({ type: onError, payload: error.response.data})
        }
        console.log(error.response)
    }
}

export default requests