import React from 'react';
import ReactDOM from 'react-dom';

import { observe } from './Game';
import App from './App';

observe(positions => {
  ReactDOM.render(
    <App positions={positions} />,
    document.getElementById('root')
  );
});
