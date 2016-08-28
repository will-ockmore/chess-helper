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

    const piece = charCode ? <Piece charCode={charCode} /> : '';

      return (
        <Square black={black}>
          {piece}
        </Square>
      );
    }

  render() {
    const { rowX } = this.props;

    return (
      <div>
        {this.renderSquare(rowX, 0)}
        {this.renderSquare(rowX, 1)}
        {this.renderSquare(rowX, 2)}
      </div>
    );
  }
}

Row.propTypes = {
  rowPositions: PropTypes.instanceOf(
    List
  ).isRequired
};
