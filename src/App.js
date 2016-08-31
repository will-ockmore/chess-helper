import React, { Component } from 'react';

import Board from './components/chessboard/Board';

class App extends Component {
  render() {
    return (
      <Board positions={this.props.positions} />
    );
  }
}

export default App;
