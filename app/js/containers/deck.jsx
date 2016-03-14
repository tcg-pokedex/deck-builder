import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import DeckCards from '../components/deck-cards';
import DeckJson from '../components/deck-json';
import DeckList from '../components/deck-list';
import TabletopDeck from '../components/tabletop-deck';

function mapStateToProps(state) {
  return {
    deck: state.deck,
  };
}

export default connect(mapStateToProps)(({ deck, dispatch }) => {
  return (
    <Row>
      <Col md={8}>
        <DeckCards deck={deck} />
      </Col>
      <Col md={4}>
        <DeckList deck={deck} dispatch={dispatch} />
        <DeckJson deck={deck} dispatch={dispatch} />
        <TabletopDeck deck={deck} />
      </Col>
    </Row>
  );
});

