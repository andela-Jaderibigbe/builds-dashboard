import React from 'react';
import renderer from 'react-test-renderer';
import Cell from 'components/Column';

import TableRow from '../';

const content = <div className="unique" />;

it('renders correctly', () => {
  const tree = renderer
    .create(
      <TableRow>
        <Cell>{content}</Cell>
      </TableRow>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
