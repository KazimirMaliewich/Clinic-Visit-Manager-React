// reducers/index.js

import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tokenReducer from './tokenReducer';
import cardsReducer from './cardsReducer';
const rootReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  cards: cardsReducer
});

export default rootReducer;