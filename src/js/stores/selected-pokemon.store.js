var Fluxxor = require('fluxxor');
var constants = require('../constants/selected-pokemon.constants');

var SelectedPokemonStore = Fluxxor.createStore({
  initialize: function() {
    this.selectedPokemon = [];

    this.bindActions(
      constants.SELECT_POKEMON, this.onSelectPokemon,
      constants.ADDED_POKEMON, this.onAddedPokemon
    );
  },

  onSelectPokemon: function(payload) {
    this.selectedPokemon = [payload.pokemon];
    this.emit('change');
  },

  onAddedPokemon: function() {
    this.selectedPokemon = [];
    this.emit('change');
  },

  selectedToCards: function() {
    var cards = [];
    _.forEach(this.selectedPokemon, function(pokemon) {
      _.times(pokemon.quantity, function(n){
        cards.push(pokemon);
      });
    });
    return cards;
  },

  getState: function() {
    return {
      selectedPokemon: this.selectedPokemon,
      selectedToCards: this.selectedToCards
    };
  }
});

module.exports = SelectedPokemonStore;
