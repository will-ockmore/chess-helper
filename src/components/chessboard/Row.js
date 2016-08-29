import React, { PropTypes } from 'react';
import { List } from 'immutable';

import PureComponent from '../PureComponent';
import Square from './Square';
import Piece from './Piece';

export default class Row extends PureComponent {
  renderSquare(x, y) {
    const black = (x + y) % 2 === 1;

    const  { rowPositions } = this.props;
    const charCode = rowPositions.get(y);

    const piece = charCode ? <Piece charCode={charCode} /> : null;

      return (
        <Square key={y} black={black}>
          {piece}
        </Square>
      );
    }

  render() {
    const { rowX, rowPositions } = this.props;

    const squares =
      rowPositions
        .keySeq()
        .map(y => this.renderSquare(rowX, y));

    return (
      <div>
        {squares}
      </div>
    );
  }
}

Row.propTypes = {
  rowX: PropTypes.number.isRequired,
  rowPositions: PropTypes.instanceOf(
    List
  ).isRequired
};
