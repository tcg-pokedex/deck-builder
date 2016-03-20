import React, { Component } from 'react';

import { imageURL } from '../util';

export default class DeckCard extends Component {
  componentDidMount() {
    $(this.refs.lightbox).fancybox({
      helpers: {
        title: null,
      },
      padding: 0,
      closeBtn: false,
    });
  }

  render() {
    const src = imageURL(this.props.card);
    return <a ref='lightbox' href={src}><img src={src} alt={this.props.card.id} className='width-100' /></a>;
  }
}

