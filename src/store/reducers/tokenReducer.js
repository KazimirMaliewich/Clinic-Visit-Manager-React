import { FETCH_TOKEN_ERROR, FETCH_TOKEN_REQUEST, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_EXPIRE_MESSAGE, FETCH_TOKEN_EXPIRE_STATUS } from "../constances/constances";
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

      case FETCH_TOKEN_EXPIRE_MESSAGE:
      return {
        ...state,
        loading: false,
        
      }

    default:
      return state;
  }
};

export default tokenReducer;