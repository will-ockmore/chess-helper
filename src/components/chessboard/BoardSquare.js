import React, { PropTypes } from 'react';
import Square from './Square';
import PureComponent from '../PureComponent';
import { itemTypes } from '../../utils/Constants';
import { DropTarget } from 'react-dnd';


const squareTarget = {
  drop(props, monitor) {
    console.log(props);
    console.log('argaoirng')
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

export default DropTarget(itemTypes.PIECE, squareTarget, collect)(BoardSquare);
