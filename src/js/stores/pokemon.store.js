var Fluxxor = require('fluxxor');
var constants = require('../constants/pokemon.constants');

var PokemonStore = Fluxxor.createStore({
  initialize: function() {
    this.pokemon = [];

    this.bindActions(
      constants.ADD_POKEMON, this.onAddPokemon,
      constants.REMOVE_POKEMON, this.onRemovePokemon,
      constants.JSON_TO_POKEMON, this.onJsonToPokemon
    );
  },

  onAddPokemon: function(payload) {
    var entry = this.pokemon.find((pokemon) => {
      return pokemon.card == payload.pokemon.card
    });
    if (entry) {
      entry.quantity += payload.pokemon.quantity;
    } else {
      this.pokemon.push(payload.pokemon);
    }
    this.emit('change');
  },

  onRemovePokemon: function(payload) {
    this.pokemon.splice(payload.index, 1);
    this.emit('change');
  },

  onJsonToPokemon: function(payload) {
    this.pokemon = JSON.parse(payload.json);
    this.emit('change');
  },

  pokemonToCards: function() {
    var cards = [];
    _.forEach(this.pokemon, function(pokemon) {
      _.times(pokemon.quantity, function(n){
        cards.push(pokemon);
      });
    });
    return cards;
  },

  pokemonToJson: function() {
    return JSON.stringify(this.pokemon, null, 4);
  },

  getState: function() {
    return {
      pokemon: this.pokemon,
      pokemonToCards: this.pokemonToCards,
      pokemonToJson: this.pokemonToJson
    };
  }
});

module.exports = PokemonStore;
