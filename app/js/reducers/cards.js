import { LOAD_CARDS_SUCCESS } from '../actions/cards';

export default function cards(state=[], action) {
  switch (action.type) {
  case LOAD_CARDS_SUCCESS:
    return action.cards;
  default:
    return [];
  }
}
