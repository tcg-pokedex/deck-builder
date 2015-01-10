var React = require('react');

var bootstrap = require('react-bootstrap')
var ListGroup = bootstrap.ListGroup;
var ListGroupItem = bootstrap.ListGroupItem;
var Badge = bootstrap.Badge;

var PokemonList = React.createClass({
  render: function() {
    var remove = this.remove;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Cards ({this.count()})</div>
        <ListGroup>
          {this.props.pokemon.map(function(p, i) {
            var id = 'item-' + i;
            return (
              <ListGroupItem key={id} >
                <Badge data-index={i} className="clickable" onClick={remove} >x</Badge>
                {p.quantity}x {p.set}-{p.number}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    );
  },

  count: function() {
    return this.props.pokemon.reduce(function(sum, pokemon) {
      return sum + pokemon.quantity;
    }, 0);
  },

  remove: function(event) {
    var index = event.currentTarget.getAttribute('data-index');
    this.props.onRemove(index);
  }
});

module.exports = PokemonList;
