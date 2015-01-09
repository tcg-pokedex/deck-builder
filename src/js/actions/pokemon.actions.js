var constants = require('../constants/pokemon.constants')

function addPokemon(pokemon) {
  this.dispatch(constants.ADD_POKEMON, { pokemon: pokemon });
}

function deletePokemon(index) {
  this.dispatch(constants.DELETE_POKEMON, { index: index });
}

module.exports = {
  addPokemon: addPokemon,
  deletePokemon: deletePokemon
};
