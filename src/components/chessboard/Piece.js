import React, { PropTypes, Component } from 'react';

import { itemTypes } from '../../utils/Constants';
import { DragSource } from 'react-dnd';

const pieceSource = {
  beginDrag(props) {
    return {};
  }
};


function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
};

export class Piece extends Component {
  render() {
    const { charCode, connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <span style={{fontSize: 36}}>{charCode}</span>
    );
  }
}

Piece.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(itemTypes.PIECE, pieceSource, collect)(Piece);
