var React = require('react');

var PokemonCard = require('./pokemon-card');

var bootstrap = require('react-bootstrap');
var Row = bootstrap.Row;
var Col = bootstrap.Col;

var PokemonCards = React.createClass({
  render: function() {
    return (
      <Row>
        {this.props.pokemon.pokemonToCards().map(function(p) {
          return (
            <Col md={3} sm={3} xs={3}>
              <PokemonCard set={p.set} number={p.number} />
            </Col>
          );
        })}
      </Row>
    );
  }
});

module.exports = PokemonCards;
