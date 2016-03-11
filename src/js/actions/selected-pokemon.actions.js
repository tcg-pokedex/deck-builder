var constants = require('../constants/selected-pokemon.constants')

function selectPokemon(pokemon) {
  this.dispatch(constants.SELECT_POKEMON, { pokemon: pokemon });
}

function addedPokemon() {
  this.dispatch(constants.ADDED_POKEMON);
}

module.exports = {
  selectPokemon: selectPokemon,
  addedPokemon: addedPokemon
};
