import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import Data from 'data.json';

import Cell from 'components/Cell';
import BuildItem from '../';

describe('<BuildItem />', () => {
  const props = Data[2];

  it('should render correctly', () => {
    const tree = renderer.create(<BuildItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have correct number of columns', () => {
    const wrapper = shallow(<BuildItem {...props} />);
    chaiExpect(wrapper).to.exist;
    chaiExpect(wrapper.find(Cell)).to.have.length(8);
  });

  it('should contain build name', () => {
    const wrapper = shallow(<BuildItem {...props} />);

    chaiExpect(wrapper.find('.buildName').text()).to.equal(props.build_name);
  });
});
