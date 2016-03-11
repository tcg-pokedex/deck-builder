var React = require('react');

var PokemonCard = require('./pokemon-card');

var bootstrap = require('react-bootstrap');
var Row = bootstrap.Row;
var Col = bootstrap.Col;

var PokemonCards = React.createClass({
  key: function(p, i) {
    return p.set + '-' + p.number + '-' + i;
  },
  render: function() {
    var cards = this.props.pokemon.pokemonToCards().map((p, i) => {
      return (
        <Col md={3} sm={3} xs={3} key={this.key(p, i)}>
          <PokemonCard card={p.card} />
        </Col>
      );
    });

    var selected = this.props.selected.selectedToCards().map((p, i) => {
      return (
        <Col md={3} sm={3} xs={3} key={this.key(p, i)} style={{opacity:.50}}>
          <PokemonCard card={p.card} />
        </Col>
      );
    });

    return (
      <Row>
        {selected}
        {cards}
      </Row>
    );
  }
});

module.exports = PokemonCards;
