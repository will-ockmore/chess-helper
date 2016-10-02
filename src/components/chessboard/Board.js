import React, { PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { List } from 'immutable';

import PureComponent from '../PureComponent';
import Row from './Row';

export class Board extends PureComponent {
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

export default DragDropContext(HTML5Backend)(Board);
