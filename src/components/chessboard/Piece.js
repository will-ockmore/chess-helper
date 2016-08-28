import React from 'react';

import PureComponent from '../PureComponent';

export default class Piece extends PureComponent {
  render() {
    const { charCode } = this.props;

    return <span style={{fontSize: 36}}>{charCode}</span>;
  }
}
