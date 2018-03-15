import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Card from '../';
import NoContent from 'components/NoContent';

describe('<Card />', () => {
  const props = {
    title: 'Metrics',
    state: 'pending',
    progress: 0,
    hasError: false,
    onClick() {},
  };

  const content = <div className="unique" />;

  it('renders properly', () => {
    const wrapper = shallow(<Card {...props} />);

    expect(wrapper).to.be.ok;
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(<Card {...props}>{content}</Card>);
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('should display card title', () => {
    const wrapper = shallow(<Card {...props}>{content}</Card>);

    const actual = wrapper.find('.title').text();
    const expected = 'Metrics';

    expect(actual).to.equal(expected);
  });

  it('should simulate click', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Card {...props} onClick={onClick}>
        {content}
      </Card>
    );

    wrapper.simulate('click');

    expect(onClick.calledOnce).to.equal(true);
  });

  it('should render NoContent when no content', () => {
    const wrapper = shallow(<Card {...props} hasContent={false} />);

    expect(wrapper.find(NoContent)).to.have.length(1);
  });
});
