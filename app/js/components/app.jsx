import React, { Component } from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';

import AddCards from '../containers/add-cards';
import Deck from '../containers/deck';

export default class PokemonApp extends Component {
  render() {
    return (
      <div className='container'>
        <PageHeader>
          Pokemon Deck Builder
        </PageHeader>
        <AddCards />
        <hr/>
        <Deck />
      </div>
    );
  }
}
