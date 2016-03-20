import React, { Component } from 'react';

import Modal, { Header, Title, Body, Footer } from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { loadJson } from '../actions/deck';
import { cardsToJson } from '../util';

export default class DeckJson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.jsonChange = this.jsonChange.bind(this);
    this.updateJson = this.updateJson.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  updateJson() {
    this.props.dispatch(loadJson(this.state.json || cardsToJson(this.props.deck.cards)));
    this.closeModal();
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  jsonChange(event) {
    this.setState({ json: event.target.value });
  }

  renderModal() {
    return (
      <Modal show={this.state.showModal} onHide={this.closeModal}>
        <Header closeButton>
          <Title>Deck JSON</Title>
        </Header>
        <Body>
          <textarea className='form-control monospaced' defaultValue={cardsToJson(this.props.deck.cards)} rows='10' cols='40' onChange={this.jsonChange}></textarea>
        </Body>
        <Footer>
          <Button bsStyle='primary' onClick={this.updateJson}>Update</Button>
        </Footer>
      </Modal>
    );
  }

  render() {
    return (
      <div>
        <Button onClick={this.openModal} block>Import/Export</Button>
        {this.renderModal()}
      </div>
    );
  }
}

