import { combineReducers } from 'redux';
import cards from './cards';
import deck from './deck';

export default combineReducers({
  cards,
  deck,
});
