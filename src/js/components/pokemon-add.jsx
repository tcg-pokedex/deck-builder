var React = require('react');

var bootstrap = require('react-bootstrap');
var Col = bootstrap.Col;
var Input = bootstrap.Input;
var Button = bootstrap.Button;

var mui = require('material-ui');
var SnackBar = mui.SnackBar;
var DropDownMenu = mui.DropDownMenu;

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
    return (
      <div>
        <form>
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
              <Button type="submit" onClick={this.submit}>Add</Button>
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

  submit: function(event) {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.setState({set: '', quantity: 0, number: 0});
    this.state.select.clear();
  }
});

module.exports = PokemonAdd;
