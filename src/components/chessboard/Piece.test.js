/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Piece from './Piece';

describe('Piece', () => {
  it('Displays the correct piece', () => {
    const wrapper = shallow(<Piece charCode="&#9819;" />);

    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.find('span').text()).to.contain('♛');
  })
});
