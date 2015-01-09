var React = require('react');
var mui = require('material-ui');
var Dialog = mui.Dialog;

var PokemonCard = React.createClass({
  pad: function(n, p, c) {
    var n = parseInt(n);
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
  },
  name: function() {
    return this.props.set + '_' + this.pad(this.props.number, 3);
  },
  src: function() {
    return 'http://www.lackeyccg.com/pokemon/high/cards/' + this.name() + '.jpg'
  },
  render: function() {
    var src = this.src();
    var name = this.name();
    return <img src={src} alt={name} class="width-100" />;
  }
});

module.exports = PokemonCard;
