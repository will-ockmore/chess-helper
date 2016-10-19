import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { positions } from './utils/Constants';
import reducer from './reducer';

import App from './App';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  payload: {
    positions
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
