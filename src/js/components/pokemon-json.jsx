var React = require('react');

var bootstrap = require('react-bootstrap');
var OverlayMixin = bootstrap.OverlayMixin;
var Button = bootstrap.Button;
var Modal = bootstrap.Modal;

var PokemonJson = React.createClass({
  mixins: [OverlayMixin],

  getInitialState: function () {
    return {
      isModalOpen: false
    };
  },

  handleToggle: function () {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  },

  handleChange: function(event) {
    this.setState({pokemonJson: event.target.value});
  },

  updatePokemon: function() {
    var json = this.state.pokemonJson || this.props.pokemon.pokemonToJson();
    this.props.onJsonToPokemon(json);
    this.handleToggle();
  },

  render: function () {
    return (
      <Button onClick={this.handleToggle} block>Import/Export</Button>
    );
  },

  renderOverlay: function () {
    if (!this.state.isModalOpen) {
      return <span/>;
    }

    var pokemon = this.props.pokemon.pokemonToJson();

    return (
        <Modal title='Modal heading' onRequestHide={this.handleToggle}>
          <div className='modal-body'>
            <textarea className='form-control' defaultValue={pokemon} rows='10' cols='40' onChange={this.handleChange}></textarea>
            <br/>
            <Button bsStyle='primary' onClick={this.updatePokemon}>Update</Button>
          </div>
        </Modal>
      );
  }
});



module.exports = PokemonJson;
