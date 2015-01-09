var PokemonStore = require('./pokemon.store');
var SetStore = require('./set.store');

module.exports = {
  PokemonStore: new PokemonStore(),
  SetStore: new SetStore()
};
