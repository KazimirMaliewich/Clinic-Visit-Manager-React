import { FETCH_TOKEN_REQUEST, FETCH_TOKEN_ERROR, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_EXPIRE_MESSAGE, FETCH_TOKEN_EXPIRE_STATUS } from "../constances/constances";

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

export const tokenExpireMessageAction = (payload) => ({
    type: FETCH_TOKEN_EXPIRE_MESSAGE,
    payload
})

export const tokenExpireStatusAction = (payload) => ({
    type: FETCH_TOKEN_EXPIRE_STATUS,
    payload
})