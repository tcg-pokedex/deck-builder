import 'whatwg-fetch';

export const LOAD_CARDS_SUCCESS = 'LOAD_CARDS_SUCCESS';
export const LOAD_CARDS_FAILURE = 'LOAD_CARDS_FAILURE';

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

function text(response) {
  return response.text();
}

function parseTSV(response) {
  const lines = response.trim().split('\n');
  const keys = lines[0].split('\t').map(key => `${key.charAt(0).toLowerCase()}${key.slice(1)}` );
  lines.shift();
  return lines.map(line =>  {
    return line.split('\t').reduce((obj, value, i) => {
      obj[keys[i]] = value;
      return obj;
    }, {});
  });
}

function loadCardsSuccess(cards) {
  return {
    type: LOAD_CARDS_SUCCESS,
    cards,
  };
}

function loadCardsFailure(error) {
  return {
    type: LOAD_CARDS_FAILURE,
    error,
  };
}

export function loadData() {
  return dispatch => {
    Promise.all([
      fetch('https://s3-us-west-2.amazonaws.com/cards.pokedex/carddata.txt')
        .then(status)
        .then(text)
        .then(parseTSV),
      fetch('https://s3-us-west-2.amazonaws.com/cards.pokedex/carddata2.txt')
        .then(status)
        .then(text)
        .then(parseTSV),
    ])
      .then(cards =>  dispatch(loadCardsSuccess(cards.reduce((a, b) => a.concat(b) ))))
      .catch(error => dispatch(loadCardsFailure(error)));
  };
}
