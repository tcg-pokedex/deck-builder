import { ADD_CARD, REMOVE_CARD, LOAD_JSON, SELECT_CARD } from '../actions/deck';
import  update from 'react/lib/update';

export default function deck(state={ cards: [], preview: [] }, action) {
  switch (action.type) {
  case ADD_CARD:
    const addEntry = state.cards.find(card => card.id === action.card.id);
    if (addEntry) {
      // Shouldn't mutate data. Fix it later
      addEntry.quantity += action.card.quantity;
      return update(state, { preview: { $set: [] } });
    }
    return update(state, {
      cards: { $unshift: [action.card] },
      preview: { $set: [] },
    });
  case REMOVE_CARD:
    const removeEntry = state.cards[action.index];
    if (removeEntry.quantity !== action.quantity) {
      // Shouldn't mutate data. Fix it later
      removeEntry.quantity -= action.quantity;
      return state;
    }
    return update(state, { cards: { $splice: [[action.index, 1]] } });
  case LOAD_JSON:
    return update(state, { cards: { $set: JSON.parse(action.json) } });
  case SELECT_CARD:
    return update(state, { preview: { $set: [action.card] } });
  default:
    return state;
  }
}
