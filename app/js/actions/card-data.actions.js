var constants = require('../constants/card-data.constants');
require('whatwg-fetch');

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function text(response) {
  return response.text();
}

function parseTSV(response) {
  var lines = response.trim().split('\n');
  var keys = lines[0].split('\t').map((key) => key.charAt(0).toLowerCase() + key.slice(1) );
  lines.shift();
  return lines.map(function(line) {
    return line.split('\t').reduce((obj, value, i) => {
      obj[keys[i]] = value;
      return obj
    }, {});
  });
}

function loadData() {
  Promise.all([
    fetch('https://dl.dropboxusercontent.com/u/73204375/pokemon/carddata.txt')
      .then(status)
      .then(text)
      .then(parseTSV),
    fetch('https://dl.dropboxusercontent.com/u/73204375/pokemon/carddata2.txt')
      .then(status)
      .then(text)
      .then(parseTSV)
  ])
    .then((cardData) =>  {
      var cards = cardData.reduce((a, b) => a.concat(b) );

      this.dispatch(constants.LOAD_CARD_DATA, { cardData: cards });
    })
}

module.exports = {
  loadData: loadData,
};
