var React = require('react');
var ReactDOM = require('react-dom');
var flux = require('./flux');

var PokemonApp = require('./components/pokemon-app');

ReactDOM.render(<PokemonApp flux={flux} />, document.getElementById("app"));
