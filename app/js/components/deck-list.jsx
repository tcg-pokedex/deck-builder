import React from 'react';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Badge from 'react-bootstrap/lib/Badge';

import { removeCard } from '../actions/deck';

export default class DeckList extends React.Component {
  constructor() {
    super();

    this.count = this.count.bind(this);
    this.remove = this.remove.bind(this);
  }

  count() {
    return this.props.deck.cards.reduce((sum, card) => sum + card.quantity, 0);
  }

  remove(index, quantity) {
    return this.props.dispatch(removeCard(index, quantity));
  }

  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>Cards ({this.count()})</div>
        <ListGroup>
          {this.props.deck.cards.map((card, i) =>  {
            return (
              <ListGroupItem key={card.id} >
                <Badge className='clickable' onClick={this.remove.bind(this, i, card.quantity)} >x</Badge>
                {card.quantity}x {card.id}
              </ListGroupItem>
              );
          })}
        </ListGroup>
      </div>
    );
  }
}

