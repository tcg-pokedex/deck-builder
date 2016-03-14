import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import PokemonApp from './components/app';

ReactDOM.render(
  <Provider store={store}>
    <PokemonApp />
  </Provider>,
  document.getElementById('app')
);
