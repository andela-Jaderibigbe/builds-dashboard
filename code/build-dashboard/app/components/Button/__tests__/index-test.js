import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from '../';

describe('<Button />', () => {
  it('renders property', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).to.be.ok;
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Button>
        <div className="unique" />
      </Button>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Button onClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
