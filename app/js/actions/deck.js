export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const LOAD_JSON = 'LOAD_JSON';
export const SELECT_CARD = 'SELECT_CARD';
export const ADDED_CARD = 'ADDED_CARD';

export function addCard(card) {
  return {
    type: ADD_CARD,
    card,
  };
}

export function removeCard(index, quantity) {
  return {
    type: REMOVE_CARD,
    index,
    quantity,
  };
}

export function loadJson(json) {
  return {
    type: LOAD_JSON,
    json,
  };
}

export function selectCard(card) {
  return {
    type: SELECT_CARD,
    card,
  };
}

export function addedCard() {
  return {
    type: ADDED_CARD,
  };
}
