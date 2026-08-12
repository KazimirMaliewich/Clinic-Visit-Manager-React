import { FETCH_USER_SUCCESS, FETCH_USER_ERROR, FETCH_USER_REQUEST } from "../constances/constances"

export const userSuccessAction = (payload) => ({
    type: FETCH_USER_SUCCESS,
    payload
})

export const userErrorAction = (payload) => ({
    type: FETCH_USER_ERROR,
    payload
})

export const userRequestAction = () => ({
    type: FETCH_USER_REQUEST
})