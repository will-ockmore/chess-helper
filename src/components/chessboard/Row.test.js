/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { List } from 'immutable';

import Row from './Row';

describe('Row', () => {
  it('Correctly renders squares from a given list', () => {
    const rowPositions = List.of('A', 'B', 'C');
    const wrapper =
      mount(
        <Row rowPositions={rowPositions} rowX={0}/>
      );

    expect(wrapper.find('span')).to.have.length(3);
    expect(wrapper.find('span').at(0).text()).to.equal('A');
    expect(wrapper.find('span').at(1).text()).to.equal('B');
    expect(wrapper.find('span').at(2).text()).to.equal('C');
  });

  it('Renders a white square first', () => {
    const rowPositions = List.of('A', 'B', 'C');
    const wrapper =
      mount(
        <Row rowPositions={rowPositions} rowX={0}/>
      );

    const isBlack = wrapper.find('Square').first().props().black;

    expect(isBlack).to.be.false; // eslint-disable-line no-unused-expressions
  });
});
