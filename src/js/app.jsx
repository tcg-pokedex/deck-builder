var React = require('react');
var flux = require('./flux');

var Application = require('./components/application');

React.render(<Application flux={flux} />, document.getElementById("app"));
