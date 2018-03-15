import React from 'react';
import renderer from 'react-test-renderer';
import Column from '../';

const content = <div className="unique" />;

it('renders correctly', () => {
  const tree = renderer.create(<Column>{content}</Column>).toJSON();
  expect(tree).toMatchSnapshot();
});
