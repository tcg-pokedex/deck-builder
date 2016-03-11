var PokemonStore = require('./pokemon.store');
var SelectedPokemonStore = require('./selected-pokemon.store');
var CardDataStore = require('./card-data.store');

module.exports = {
  PokemonStore: new PokemonStore(),
  SelectedPokemonStore: new SelectedPokemonStore(),
  CardDataStore: new CardDataStore(),
};
