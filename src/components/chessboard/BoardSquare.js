import React, { PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { dropPiece } from '../../actions';
import { itemTypes } from '../../utils/Constants';

import Square from './Square';
import PureComponent from '../PureComponent';


const squareTarget = {
  drop(props, monitor) {
    const { x, y } = props;
    const { charCode } = monitor.getItem();

    props.dropPiece(x, y, charCode);
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

export class BoardSquare extends PureComponent {
  render() {
    const { x, y, connectDropTarget } = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div style={{height: '100%', width: '100%'}}>
        <Square {...this.props} black={black}>
          {this.props.children}
        </Square>
      </div>
    );
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default compose(
  connect(null, { dropPiece }),
  DropTarget(itemTypes.PIECE, squareTarget, collect),
)(BoardSquare)
