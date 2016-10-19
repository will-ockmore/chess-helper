import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  render() {
    const { black, x, y, isOver } = this.props;
    const fill = black ? 'grey' : 'white';

    const highlighted = isOver && 'red';

    return <div style={{
        backgroundColor: highlighted || fill,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
        <div style={{position: 'absolute', fontSize:'10px'}}>{`x${x}, y${y} `}</div>
        {this.props.children}
      </div>;
  }
}

Square.propTypes = {
  black: PropTypes.bool
};
