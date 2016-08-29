import React, { PropTypes } from 'react';
import { List } from 'immutable';

import PureComponent from '../PureComponent';
import Row from './Row';

export default class Board extends PureComponent {
  renderRow(x) {
    return <Row key={x} rowX={x} rowPositions={this.props.positions.get(x)} />;
  }
  render() {
    const { positions } = this.props;

    const rows =
      positions
        .keySeq()
        .map(x => this.renderRow(x));

    return (
      <div style={{
          height: '550px',
          width: '550px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch'
        }}>
        {rows}
      </div>
    );
  }
}

Board.propTypes = {
  positions: PropTypes.instanceOf(
    List
  ).isRequired
};
