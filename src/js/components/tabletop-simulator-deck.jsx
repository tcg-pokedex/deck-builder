var React = require('react');
var ReactCanvas = require('react-canvas');

var Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;

var HEIGHT = 480;
var WIDTH = 350;
var ROWS = 6;
var COLS = 10;

var TabletopSimulatorDeck = React.createClass({
  render: function() {
    return (
      <div style={{ display: 'none'}}>
        <Surface ref="canvas" width={WIDTH * COLS} height={HEIGHT * ROWS} left={0} top={0}>
          { this.props.pokemon.pokemonToCards().map((card, index) => {
            return (
              <Image key={this.key(card, index)} style={this.imageStyle(index)} src={this.src(card)} />
            );
          })}
        </Surface>
      </div>
    );
  },

  key: function(card, index) {
    return card.set + '-' + card.number + '-' + index;
  },

  pad: function(n, p, c) {
    var n = n;
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
  },
  name: function(card) {
    return card.set + '_' + this.pad(card.number, 3);
  },
  src: function(card) {
    return 'https://dl.dropboxusercontent.com/u/73204375/pokemon/cards/' + this.name(card) + '.jpg'
  },
  imageStyle: function (index) {
    var row = Math.floor(index / COLS);
    var col = index % COLS;

    return {
      top: row * HEIGHT,
      left: col * WIDTH,
      width: WIDTH,
      height: HEIGHT
    };
  },

  dataURI() {
    return window.open(this.refs.canvas.toDataURL('image/png'));
  }
});

module.exports = TabletopSimulatorDeck;
