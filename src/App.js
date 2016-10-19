import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from './components/chessboard/Board';

class App extends Component {
  render() {
    return (
      <Board positions={this.props.positions} />
    );
  }
}

export function mapStateToProps(state){
  return {
    positions: state
  }
}

export default connect(mapStateToProps, {})(App);
