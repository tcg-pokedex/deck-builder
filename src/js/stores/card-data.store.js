var Fluxxor = require('fluxxor');
var constants = require('../constants/card-data.constants');

var CardDataStore = Fluxxor.createStore({
  initialize: function() {
    this.cardData = [];

    this.bindActions(
      constants.LOAD_CARD_DATA, this.onLoadCardData
    );
  },

  onLoadCardData: function(payload) {
    this.cardData = payload.cardData;
    this.emit('change');
  },

  getState: function() {
    return {
      cardData: this.cardData
    };
  }
});

module.exports = CardDataStore;
