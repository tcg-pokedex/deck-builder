var React = require('react');
var flux = require('./flux');

var PokemonApp = require('./components/pokemon-app');

React.render(<PokemonApp flux={flux} />, document.getElementById("app"));
