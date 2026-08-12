import { FETCH_CARDS_REQUEST, FETCH_CARDS_SUCCESS, FETCH_CARDS_ERROR} from "../constances/constances"

export const cardsRequestAction = () => ({
    type: FETCH_CARDS_REQUEST
})

export const cardsSuccessAction = (payload) => ({
    type: FETCH_CARDS_SUCCESS,
    payload
})

export const cardsErrorAction = (payload) => ({
    type: FETCH_CARDS_ERROR,
    payload
})