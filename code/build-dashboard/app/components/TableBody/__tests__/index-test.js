import React from 'react';
import renderer from 'react-test-renderer';
import TableBody from '../';

const content = <div className="unique" />;

it('renders correctly', () => {
  const tree = renderer.create(<TableBody>{content}</TableBody>).toJSON();
  expect(tree).toMatchSnapshot();
});
