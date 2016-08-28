import React, { Component } from 'react';

import Piece from './components/chessboard/Piece';
import Square from './components/chessboard/Square';

class App extends Component {
  render() {
    return (
      <div>
        <Square black>
          <Piece charCode="&#9816;" />
        </Square>
      </div>
    );
  }
}

export default App;
