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
    return (
      <Row>
        {this.props.pokemon.pokemonToCards().map((p, i) => {
          return (
            <Col md={3} sm={3} xs={3} key={this.key(p, i)}>
              <PokemonCard set={p.set} number={p.number} />
            </Col>
          );
        })}
      </Row>
    );
  }
});

module.exports = PokemonCards;
