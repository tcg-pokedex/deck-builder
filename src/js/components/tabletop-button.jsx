var React = require('react');

var bootstrap = require('react-bootstrap');
var Button = bootstrap.Button;


var TabletopButton = React.createClass({

  dataURI: function() {
    return window.open(document.getElementsByTagName('canvas')[0].toDataURL('image/png'));
  },

  render: function() {
    return <Button onClick={this.dataURI} block>Download Tabletop Simulator Deck</Button>
  }

});

module.exports = TabletopButton;
