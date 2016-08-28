import React, { PropTypes } from 'react';
import { List } from 'immutable';

import PureComponent from '../PureComponent';
import Row from './Row';

export default class Board extends PureComponent {
  render() {
    const { positions } = this.props;
    return (
      <div>
        <Row rowX={0} rowPositions={positions.get(0)} />
        <Row rowX={1} rowPositions={positions.get(1)} />
        <Row rowX={2} rowPositions={positions.get(2)} />
      </div>
    );
  }
}

Board.propTypes = {
  positions: PropTypes.instanceOf(
    List
  ).isRequired
};
