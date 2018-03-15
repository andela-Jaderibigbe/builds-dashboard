import React from 'react';
import renderer from 'react-test-renderer';
import Column from 'components/Column';

import TableHeader from '../';

const content = <div className="unique" />;

it('renders correctly', () => {
  const tree = renderer
    .create(
      <TableHeader>
        <Column>{content}</Column>
      </TableHeader>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
