import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NoContent from '../';

describe('<NoContent />', () => {
  it('should render NoContent icon', () => {
    const wrapper = shallow(<NoContent />);

    expect(wrapper).to.be.ok;
    expect(wrapper.find('i')).to.exist;
  });

  it('should render default message', () => {
    const wrapper = shallow(<NoContent />);

    expect(wrapper.find('span').text()).to.match(/No Result/);
  });
});
