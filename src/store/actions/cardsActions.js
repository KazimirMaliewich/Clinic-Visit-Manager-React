import { FETCH_CARDS_REQUEST, FETCH_CARDS_SUCCESS, 
    FETCH_CARDS_ERROR, FETCH_CREATE_CARDS_SUCCESS, 
    FETCH_CARD_BY_ID, FETCH_DELETE_CARD, SET_CARD_ID,
    FETCH_UPDATE_CARD, FETCH_SEARCH_CARD} from "../constances/constances"

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

export const cardsCreateSuccessAction = (payload) => ({
    type: FETCH_CREATE_CARDS_SUCCESS,
    payload
})

export const cardsGetById = (payload) => ({
    type: FETCH_CARD_BY_ID,
    payload
})

export const cardDeletebyID = (payload) => ({
    type: FETCH_DELETE_CARD,
    payload
})

export const setCardId = (payload) => ({
    type: SET_CARD_ID,
    payload
})

export const updateCardAction = (payload) => ({
    type: FETCH_UPDATE_CARD,
    payload
})

export const searchCardAction = (payload) => ({
    type: FETCH_SEARCH_CARD,
    payload
})