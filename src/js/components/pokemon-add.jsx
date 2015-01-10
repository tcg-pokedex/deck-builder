var React = require('react/addons');
var LinkedStateMixin = React.addons.LinkedStateMixin;

var bootstrap = require('react-bootstrap');
var Col = bootstrap.Col;
var Input = bootstrap.Input;
var Button = bootstrap.Button;
var Alert = bootstrap.Alert;

var PokemonAdd = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {
      quantity: 0,
      number: 0,
      set: '',
      alertVisible: false
    };
  },

  componentDidMount: function() {
    var sets = this.props.sets;
    var select = $(this.refs.select.getDOMNode()).selectize({
      options: sets.sets,
      optgroups: sets.series,
      labelField: 'label',
      valueField: 'value',
      optgroupField: 'series',
      optgroupLabelField: 'series',
      optgroupValueField: 'series',
      searchField: ['series', 'label'],
      optgroupOrder: _.pluck(sets.series, 'series'),
      onChange: this.updateSet
    });

    this.setState({select: select[0].selectize});
  },

  render: function() {
    var alert;
    if (this.state.alertVisible) {
      alert =  (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          There was a problem with that pokemon.
        </Alert>
      );
    } else {
      alert = <span></span>;
    }
    return (
      <div>
        {alert}
        <form onSubmit={this.onSubmit}>
          <Col md={1} mdOffset={3}>
            <div className="form-group">
              <label>Quantity</label>
              <input type="number" className="form-control width-100" valueLink={this.linkState('quantity')} min="0" />
            </div>
          </Col>
          <Col md={2}>
            <div className="form-group">
              <label>Set</label>
              <select ref="select" placeholder="Pick a set...">

              </select>
            </div>
          </Col>
          <Col md={1} >
            <div className="form-group">
              <label>Number</label>
              <input type="number" className="form-control width-100" valueLink={this.linkState('number')} min="0" />
            </div>
          </Col>
          <Col md={2} >
            <div className="form-group add-button">
              <Button type="submit">Add</Button>
            </div>
          </Col>
        </form>
        <br />
        <br />
        <br />
      </div>
    );
  },

  updateSet: function(value) {
    this.setState({set: value});
  },

  onSubmit: function(event) {
    event.preventDefault();
    if( parseInt(this.state.quantity) === 0 ||
        isNaN(parseInt(this.state.quantity)) ||
        parseInt(this.state.number) === 0 ||
        isNaN(parseInt(this.state.number)) ||
        this.state.set === "" ) {
      this.setState({alertVisible: true});
    } else {
      this.props.onAdd({
        quantity: parseInt(this.state.quantity),
        number: parseInt(this.state.number),
        set: this.state.set
      });
      this.setState({set: '', quantity: 0, number: 0});
      this.state.select.clear();
    }
  },

  handleAlertDismiss: function() {
    this.setState({alertVisible: false});
  }
});

module.exports = PokemonAdd;
