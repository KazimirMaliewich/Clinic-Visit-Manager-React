import { FETCH_CARDS_REQUEST, FETCH_CARDS_SUCCESS, FETCH_CARDS_ERROR, FETCH_CREATE_CARDS_SUCCESS, FETCH_CARD_BY_ID, 
    FETCH_DELETE_CARD, SET_CARD_ID, FETCH_UPDATE_CARD, FETCH_SEARCH_CARD } from "../constances/constances";

const initialState = {
    loading: false,
    error: null,
    cards: {},
    cardsId: [],
    cardId: null
};

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARDS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_CARDS_SUCCESS:
            return {
                ...state,
                loading: false,
                cardsId: action.payload.map(({id}) => id),
                cards: action.payload.reduce((acc, curr) => {
                    acc[curr.id] = curr
                    return acc
                }, {})
            };

        case FETCH_CARDS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case FETCH_CREATE_CARDS_SUCCESS:
            return {
                ...state,
                loading: false,
                cardsId: [...state.cardsId, action.payload.id],
                cards: {...state.cards, [action.payload.id]: action.payload}
            }
        
        case FETCH_CARD_BY_ID:
            return {
                ...state,
                loading: false,
                cards: {...state.cards, [action.payload.id]: action.payload}
            }

        case FETCH_DELETE_CARD:
            const deletedObject = {...state.cards}
            delete deletedObject[action.payload.id]

            return{
                ...state,
                loading: false,
                cardsId: state.cardsId.filter((item) => item !== action.payload.id),
                cards: deletedObject
            }

        case SET_CARD_ID:
            return {
                ...state,
                loading: false,
                cardId: action.payload
            }

        case FETCH_UPDATE_CARD:
            return {
                ...state,
                loading: false,
                cards: {...state.cards, [action.payload.id]: action.payload}
            }

        case FETCH_SEARCH_CARD:
            return {
                ...state,
                loading: false,
                cardsId: action.payload.map(({id}) => id),
                cards: action.payload.reduce((acc, curr) => {
                    acc[curr.id] = curr
                    return acc
                }, {})
            }
        
        default:
            return state;
    }
}

export default cardsReducer

//{
//{1: {id: 1, name: John} }
//{id: 2, name: John}
//{1: {id: 1, name: John}, {id: 2, name: John} }
//}