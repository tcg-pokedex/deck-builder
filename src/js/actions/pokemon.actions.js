var constants = require('../constants/pokemon.constants')

function addCard(card) {
  this.dispatch(constants.ADD_CARD, { card: card });
}

function deleteCard(index) {
  this.dispatch(constants.DELETE_CARD, { index: index });
}

module.exports = {
  addCard: addCard,
  deleteCard: deleteCard
};
