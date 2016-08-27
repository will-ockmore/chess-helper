import React, { Component } from 'react';

import './App.css';
import Piece from './components/chessboard/Piece';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Piece charCode="&#9816;" />
      </div>
    );
  }
}

export default App;
