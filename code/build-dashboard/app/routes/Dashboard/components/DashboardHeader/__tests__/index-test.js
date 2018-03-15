import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';

import Column from 'components/Column';
import DashboardHeader from '../';

describe('<DashboardHeader />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<DashboardHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have correct number of columns', () => {
    const wrapper = shallow(<DashboardHeader />);
    chaiExpect(wrapper).to.exist;
    chaiExpect(wrapper.find(Column)).to.have.length(8);
  });
});
