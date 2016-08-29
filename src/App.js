import React, { Component } from 'react';
import { fromJS } from 'immutable';

import Board from './components/chessboard/Board';

class App extends Component {
  render() {
    const positions = fromJS([
      ['\u2656', '\u2658', '\u2657', '\u2655', '\u2654', '\u2657', '\u2658', '\u2656'],
      ['\u2659', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659'],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['\u265F', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F'],
      ['\u265C', '\u265E', '\u265D', '\u265B', '\u265A', '\u265D', '\u265E', '\u265C'],
    ]);
    return (
      <div>
        <Board positions={positions} />
      </div>
    );
  }
}

export default App;
