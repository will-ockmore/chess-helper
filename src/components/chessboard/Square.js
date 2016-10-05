import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  render() {
    const { black, x, y, isOver } = this.props;
    const fill = black ? 'grey' : 'white';

    return <div style={{
        backgroundColor: fill,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
        <div style={{position: 'absolute', fontSize:'10px'}}>{`x ${x}, y ${y} `}</div>
        {this.props.children}
        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }} />
        }
      </div>;
  }
}

Square.propTypes = {
  black: PropTypes.bool
};
