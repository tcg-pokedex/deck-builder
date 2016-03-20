import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import DeckCard from './deck-card';
import { expandCards } from '../util';

export default class DeckCards extends Component {

  constructor() {
    super();

    this.innerRender = this.innerRender.bind(this);
  }

  innerRender(cards, opacity) {
    return expandCards(cards).map(c => {
      return (
        <Col md={3} sm={3} xs={3} key={`${c.key}-${opacity}`} style={{ opacity }}>
          <DeckCard card={c} />
        </Col>
      );
    });
  }

  render() {
    return (
      <Row>
        {this.innerRender(this.props.deck.preview, 0.5)}
        {this.innerRender(this.props.deck.cards, 1)}
      </Row>
    );
  }
}
