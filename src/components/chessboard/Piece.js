import React, { Component } from 'react';

export default class Piece extends Component {
  render() {
    const { charCode } = this.props;

    return <span>{charCode}</span>;
  }
}
