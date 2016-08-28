/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Square from './Square';
import Piece from './Piece';

describe('Square', () => {
  it('Displays the correct piece', () => {
    const wrapper =
      mount(
        <Square>
          <Piece charCode="&#9819;" />
        </Square>
      );

    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.find('span').text()).to.contain('♛');
  });

  it('Displays the correct colour', () => {
    const wrapper =
      mount(
        <Square black>
          <Piece charCode="&#9819;" />
        </Square>
      );

    const blackStyles = {
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        height: '100%'
      }

    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.find({style: blackStyles})).to.have.length(1);
  });
});
