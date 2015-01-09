var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Button = require('react-bootstrap/Button');

var PokemonAdd = require('./pokemon-add');
var PokemonCards = require('./pokemon-cards');
var PokemonJson = require('./pokemon-json');
var PokemonList = require('./pokemon-list');

var PokemonApp = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin('PokemonStore', 'SetStore')],

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      pokemon: flux.store('PokemonStore').getState(),
      set: flux.store('SetStore').getState()
    };
  },

  render: function() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1>Pokemon Deck Builder</h1>
        </div>
        <PokemonAdd onAdd={this.onAdd} />
        <br/>
        <br/>
        <hr/>
        <div className='row'>
          <div className='col-md-8'>
            <PokemonCards pokemon={this.state.pokemon} />
          </div>
          <div className='col-md-4'>
            <PokemonList pokemon={this.state.pokemon.pokemon} />
            <Button block onClick={this.toggleDialog}>Import/Export</Button>
          </div>
        </div>
        <PokemonJson pokemon={this.state.pokemon.pokemon} ref='pokemonJson' />
      </div>
    );
  },

  onAdd: function(card) {
    this.getFlux().actions.addImage(card);
  },

  toggleDialog: function() {
    this.refs.pokemonJson.toggleDialog();
  }

});

module.exports = PokemonApp;
