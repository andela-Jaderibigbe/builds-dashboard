import React from 'react';
import renderer from 'react-test-renderer';

import TableFooter from '../';

const content = <div className="unique" />;

it('renders correctly', () => {
  const tree = renderer.create(<TableFooter>{content}</TableFooter>).toJSON();
  expect(tree).toMatchSnapshot();
});
