import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import data from 'data.json';

import BuildItem from 'routes/Dashboard/components/BuildItem';
import BuildList from '../';

describe('<BuildList />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<BuildList data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have correct number of rows', () => {
    const wrapper = shallow(<BuildList data={data} />);
    chaiExpect(wrapper).to.exist;
    chaiExpect(wrapper.find(BuildItem)).to.have.length(6);
  });
});
