import React, { Component } from 'react';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert';

import { selectCard, addCard } from '../actions/deck';
import { loadData } from '../actions/cards';

function mapStateToProps(state) {
  return {
    cards: state.cards,
  };
}

class AddCards extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      id: '',
      alertVisible: false,
    };

    this.updateCard = this.updateCard.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.submit = this.submit.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(loadData());
    const cards = this.props.cards;
    const select = $(this.refs.select).selectize({
      options: cards,
      labelField: 'name',
      valueField: 'imageFile',
      searchField: ['name'],
      onChange: this.updateCard,
    });

    this.setState({ select: select[0].selectize });
  }

  componentDidUpdate() {
    this.state.select.addOption(this.props.cards);
  }

  handleAlertDismiss() {
    this.setState({ alertVisible: false });
  }

  updateQuantity(event) {
    const quantity = parseInt(event.target.value, 10);
    this.setState({ quantity });
    if (this.state.id !== '') {
      this.props.dispatch(selectCard({
        quantity,
        id: this.state.id,
      }));
    }
  }

  updateCard(value) {
    if (value !== '') {
      this.props.dispatch(selectCard({
        quantity: this.state.quantity,
        id: value,
      }));
    }
    this.setState({ id: value });
  }

  submit(event) {
    event.preventDefault();
    if (this.state.quantity === 0 ||
        isNaN(this.state.quantity) ||
        !this.state.id) {
      this.setState({ alertVisible: true });
    } else {
      this.props.dispatch(addCard({
        quantity: this.state.quantity,
        id: this.state.id,
      }));
      this.setState({ id: '', quantity: 1 });
      this.state.select.clear();
    }
  }

  renderAlert() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle='danger' onDismiss={this.handleAlertDismiss}>
          There was a problem with that pokemon.
        </Alert>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.renderAlert()}
        <form onSubmit={this.onSubmit}>
          <Col md={1} mdOffset={3}>
            <div className='form-group'>
              <label>Quantity</label>
              <input type='number' value={this.state.quantity} className='form-control width-100' onChange={this.updateQuantity} min='0' />
            </div>
          </Col>
          <Col md={3}>
            <div className='form-group'>
              <label>Card</label>
              <select ref='select' placeholder='Pick a card...' />
            </div>
          </Col>
          <Col md={2} >
            <div className='form-group add-button'>
              <Button type='submit' onClick={this.submit} >Add</Button>
            </div>
          </Col>
        </form>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default connect(mapStateToProps)(AddCards);
