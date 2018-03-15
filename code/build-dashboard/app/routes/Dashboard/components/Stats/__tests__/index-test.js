import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import data from 'data.json';

import MetricsCard from 'routes/Dashboard/components/MetricsCard';
import BuildCard from 'routes/Dashboard/components/BuildCard';
import TestCard from 'routes/Dashboard/components/TestCard';

import Stats from '../';

describe('<Stats />', () => {
  const props = data[2];
  it('should render correctly', () => {
    const tree = renderer.create(<Stats {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should appropraite cards correctly', () => {
    const wrapper = shallow(<Stats {...props} />);

    chaiExpect(wrapper.find(MetricsCard)).to.have.length(1);
    chaiExpect(wrapper.find(BuildCard)).to.have.length(1);
    chaiExpect(wrapper.find(TestCard)).to.have.length(2);
  });
});
