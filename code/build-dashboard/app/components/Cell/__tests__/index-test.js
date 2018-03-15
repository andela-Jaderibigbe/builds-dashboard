import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Cell from '../';

describe('<Cell />', () => {
  const content = <div className="unique" />;

  it('renders properly', () => {
    const wrapper = shallow(<Cell>{content}</Cell>);

    expect(wrapper).to.be.ok;
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(<Cell>{content}</Cell>);
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('should be able to hide children', () => {
    const wrapper = shallow(<Cell isHidden={true}>{content}</Cell>);

    expect(wrapper.contains(<div className="unique" />)).to.equal(false);
  });
});
