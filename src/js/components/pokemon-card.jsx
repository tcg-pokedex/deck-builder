var React = require('react');

var PokemonCard = React.createClass({
  componentDidMount: function() {
    $(this.refs.lightbox).fancybox({
      helpers : {
        title : null
      },
      padding: 0,
      closeBtn: false
    });
  },
  src: function() {
    return 'https://dl.dropboxusercontent.com/u/73204375/pokemon/cards/' + this.props.card + '.jpg'
  },
  render: function() {
    var src = this.src();
    var name = this.props.card;
    return <a ref="lightbox" href={src}><img src={src} alt={name} className="width-100" /></a>;
  }
});

module.exports = PokemonCard;
