import { FETCH_CARDS_REQUEST, FETCH_CARDS_SUCCESS, FETCH_CARDS_ERROR, FETCH_TOKEN_REQUEST } from "../constances/constances";

const initialState = {
    loading: false,
    error: null,
    cards: {},
    cardsId: []
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
                cards: action.payload
            };

        default:
            return state;
    }
}

export default cardsReducer