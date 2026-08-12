import { FETCH_TOKEN_ERROR, FETCH_TOKEN_REQUEST, FETCH_TOKEN_SUCCESS } from "../constances/constances";
const initialState = {
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };

    case FETCH_TOKEN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default tokenReducer;