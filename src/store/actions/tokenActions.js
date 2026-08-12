import { FETCH_TOKEN_REQUEST, FETCH_TOKEN_ERROR, FETCH_TOKEN_SUCCESS } from "../constances/constances";

export const tokenSuccessAction = (payload) => {
    return {
        type: FETCH_TOKEN_SUCCESS,
        payload
    }
    
}

export const tokenRequestAction = () => ({
    type: FETCH_TOKEN_REQUEST
})

export const tokenErrorAction = (payload) => ({
    type: FETCH_TOKEN_ERROR,
    payload
})