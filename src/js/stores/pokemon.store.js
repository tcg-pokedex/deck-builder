var Fluxxor = require('fluxxor');
var constants = require('../constants/pokemon.constants');

var PokemonStore = Fluxxor.createStore({
  initialize: function() {
    this.pokemon = [];

    this.bindActions(
      constants.ADD_POKEMON, this.onAddPokemon,
      constants.DELETE_POKEMON, this.onDeletePokemon
    );
  },

  onAddCard: function(payload) {
    this.pokemon.push(payload.pokemon);
    this.emit('change');
  },

  onDeleteCard: function(payload) {
    this.pokemon.splice(payload.index, 1);
    this.emit('change');
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
