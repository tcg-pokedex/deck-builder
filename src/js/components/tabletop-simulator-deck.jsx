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
    return card.card + '-' + index;
  },

  src: function(card) {
    return 'https://dl.dropboxusercontent.com/u/73204375/pokemon/cards/' + card.card + '.jpg'
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
