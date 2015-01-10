var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var bootstrap = require('react-bootstrap');
var Button = bootstrap.Button;
var PageHeader = bootstrap.PageHeader;
var Col = bootstrap.Col;
var Row = bootstrap.Row;

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
      sets: flux.store('SetStore').getState()
    };
  },

  render: function() {
    return (
      <div className='container'>
        <PageHeader>
          <h1>Pokemon Deck Builder</h1>
        </PageHeader>
        <PokemonAdd onAdd={this.onAdd} sets={this.state.sets} />
        <hr/>
        <Row>
          <Col md={8}>
            <PokemonCards pokemon={this.state.pokemon} />
          </Col>
          <Col md={4}>
            <PokemonList pokemon={this.state.pokemon.pokemon} onRemove={this.onRemove} />
            <Button block onClick={this.toggleDialog}>Import/Export</Button>
          </Col>
        </Row>
        <PokemonJson pokemon={this.state.pokemon.pokemon} ref='pokemonJson' />
      </div>
    );
  },

  onAdd: function(pokemon) {
    this.getFlux().actions.pokemon.addPokemon(pokemon);
  },

  onRemove: function(index) {
    this.getFlux().actions.pokemon.removePokemon(index);
  },

  toggleDialog: function() {
    this.refs.pokemonJson.toggleDialog();
  }

});

module.exports = PokemonApp;
