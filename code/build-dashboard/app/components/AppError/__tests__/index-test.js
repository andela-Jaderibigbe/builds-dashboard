import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AppError from '../';

describe('<AppError/>', () => {
  let _component;

  beforeEach(() => {
    _component = shallow(<AppError />);
  });

  it('renders AppError title', () => {
    const title = _component.find('h1');
    expect(title).to.exist;
    expect(title.text()).to.match(/Sorry, something went wrong./);
  });

  it('renders a body text', () => {
    const subTitle = _component.find('p');
    expect(subTitle).to.exist;
  });
});
