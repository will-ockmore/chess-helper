import React, { Component } from 'react';
import { fromJS } from 'immutable';

import Board from './components/chessboard/Board';

class App extends Component {
  render() {
    const positions = fromJS([
      ['\u2656', '\u265E', ''],
      ['\u265A', '', '\u265D'],
      ['\u2655', '\u2656', ''],
    ]);
    return (
      <div>
        <Board positions={positions} />
      </div>
    );
  }
}

export default App;
