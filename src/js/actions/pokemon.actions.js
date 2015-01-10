var constants = require('../constants/pokemon.constants')

function addPokemon(pokemon) {
  this.dispatch(constants.ADD_POKEMON, { pokemon: pokemon });
}

function removePokemon(index) {
  this.dispatch(constants.REMOVE_POKEMON, { index: index });
}

function jsonToPokemon(json) {
  this.dispatch(constants.JSON_TO_POKEMON, { json: json });
}

module.exports = {
  addPokemon: addPokemon,
  removePokemon: removePokemon,
  jsonToPokemon: jsonToPokemon
};
