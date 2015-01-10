var constants = require('../constants/pokemon.constants')

function addPokemon(pokemon) {
  this.dispatch(constants.ADD_POKEMON, { pokemon: pokemon });
}

function removePokemon(index) {
  this.dispatch(constants.REMOVE_POKEMON, { index: index });
}

module.exports = {
  addPokemon: addPokemon,
  removePokemon: removePokemon
};
