var Fluxxor = require('fluxxor');
var constants = require('../constants/pokemon.constants');

var PokemonStore = Fluxxor.createStore({
  initialize: function() {
    this.pokemon = [];

    this.bindActions(
      constants.ADD_CARD, this.onAddCard,
      constants.DELETE_CARD, this.onDeleteCard
    );
  },

  onAddCard: function(payload) {
    this.cards.push(payload.card);
    this.emit("change");
  },

  onDeleteCard: function(payload) {
    this.cards.splice(payload.index, 1);
    this.emit("change");
  },

  pokemonToCards: function() {
    var cards = [];
    _.forEach(this.pokemon, function(pokemon) {
      _.times(parseInt(pokemon.quantity), function(n){
        cards.push(pokemon);
      });
    });
    return cards;
  },

  getState: function() {
    return {
      pokemon: this.pokemon,
      pokemonToCards: this.pokemonToCards
    };
  }
});

module.exports = PokemonStore;
