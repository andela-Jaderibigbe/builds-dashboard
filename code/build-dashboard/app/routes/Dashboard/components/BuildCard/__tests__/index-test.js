import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { formatBuildDate } from 'utils';

import Card from 'components/Card';
import BuildCard from '../';

describe('<BuildCard />', () => {
  const build_date = '2017-10-17T15:48:12.600Z';

  const props = {
    state: 'running',
    progress: 100,
    hasError: true,
    build_date,
    hasContent: true,
  };
  it('should render properly', () => {
    const wrapper = shallow(<BuildCard {...props} />);
    expect(wrapper).to.exist;
    expect(wrapper.find(Card)).to.have.length(1);
  });

  it('should contain build date', () => {
    const wrapper = shallow(<BuildCard {...props} />);
    expect(wrapper.find('.bottomLabel').text()).to.equal(formatBuildDate(build_date));
  });

  it('should contain debug and release icon', () => {
    const wrapper = shallow(<BuildCard {...props} />);
    expect(wrapper.find('i')).to.have.length(2);
  });
});
