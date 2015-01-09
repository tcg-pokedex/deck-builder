var React = require('react');

var bootstrap = require('react-bootstrap');
var Col = bootstrap.Col;
var Button = bootstrap.Button;

var mui = require('material-ui');
var SnackBar = mui.SnackBar;

var PokemonAdd = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      quantity: 0,
      number: 0,
      set: ''
    };
  },

  componentDidMount: function() {
    console.log(this.refs.select);
    $(this.refs.select.getDOMNode()).selectize();
  },

  render: function() {
    return (
      <div>
        <form>
          <Col md={1} mdOffset={3}>
            <div className="form-group">
              <label for="quantity">Quantity</label>
              <input type="number" className="form-control width-100" valueLink={this.linkState('quantity')} min="0" />
            </div>
          </Col>
          <Col md={2}>
            <div className="form-group">
              <label for="set">Set</label>
              <select ref="select" placeholder="Pick a set...">
                {this.props.sets.map(function(set) {
                  return <option value={set.value}>{set.label}</option>;
                })}
              </select>
            </div>
          </Col>
          <Col md={1} >
            <div className="form-group">
              <label for="number">Number</label>
              <input type="number" className="form-control width-100" valueLink={this.linkState('number')} min="0" />
            </div>
          </Col>
          <Col md={2} >
            <div className="form-group add-button">
              <Button onClick={this.submit}>Add</Button>
            </div>
          </Col>
        </form>
        <br />
        <br />
        <br />
      </div>
    );
  },

  updateSet: function(e, selectedIndex, menuItem) {
    this.state.set = menuItem;
  },

  submit: function() {
    console.log(this.state);
  }
});

module.exports = PokemonAdd;
