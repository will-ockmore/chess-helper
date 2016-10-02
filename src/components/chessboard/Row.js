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

    const piece = charCode ? <Piece charCode={charCode} /> : <span style={{fontSize: 36}}>&nbsp;</span>;

    return (
      <div key={y} style={{display: 'flex', flexGrow: 1}}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
}

  render() {
    const { rowX, rowPositions } = this.props;

    const squares =
      rowPositions
        .keySeq()
        .map(y => this.renderSquare(rowX, y));

    return (
      <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}>
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
