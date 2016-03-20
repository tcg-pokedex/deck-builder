import React, { Component } from 'react';
import { Surface, Image } from 'react-canvas';
import Button from 'react-bootstrap/lib/Button';
import { imageURL, expandCards } from '../util';

const HEIGHT = 480;
const WIDTH = 350;
const ROWS = 6;
const COLS = 10;

export default class TabletopDeck extends Component {
  constructor() {
    super();

    this.imageStyle = this.imageStyle.bind(this);
    this.dataURI = this.dataURI.bind(this);
  }

  dataURI() {
    return window.open(document.getElementsByTagName('canvas')[0].toDataURL('image/png'));
  }

  imageStyle(index) {
    const row = Math.floor(index / COLS);
    const col = index % COLS;

    return {
      top: row * HEIGHT,
      left: col * WIDTH,
      width: WIDTH,
      height: HEIGHT,
    };
  }

  render() {
    return (
      <div>
        <div style={{ display: 'none' }}>
          <Surface ref='canvas' width={WIDTH * COLS} height={HEIGHT * ROWS} left={0} top={0}>
            {expandCards(this.props.deck.cards).map((card, index) => {
              return (
                <Image key={`${card.id}-${index}`} style={this.imageStyle(index)} src={imageURL(card)} />
              );
            })}
          </Surface>
        </div>
        <Button onClick={this.dataURI} block>Download Tabletop Simulator Deck</Button>
      </div>
    );
  }
}

