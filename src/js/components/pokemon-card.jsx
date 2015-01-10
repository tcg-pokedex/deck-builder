var React = require('react');

var PokemonCard = React.createClass({
  componentDidMount: function() {
    $(this.refs.lightbox.getDOMNode()).fancybox({
      helpers : {
        title : null
      },
      padding: 0,
      closeBtn: false
    });
  },
  pad: function(n, p, c) {
    var n = n;
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
    return <a ref="lightbox" href={src}><img src={src} alt={name} className="width-100" /></a>;
  }
});

module.exports = PokemonCard;
