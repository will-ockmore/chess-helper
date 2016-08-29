import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  render() {
    const { black } = this.props;
    const fill = black ? 'grey' : 'white';

    return <div style={{
        backgroundColor: fill,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
        {this.props.children}
      </div>
        ;
  }
}

Square.propTypes = {
  black: PropTypes.bool
};
