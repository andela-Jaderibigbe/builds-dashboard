import React from 'react';
import renderer from 'react-test-renderer';

import TableHeader from 'components/TableHeader';
import TableBody from 'components/TableBody';
import TableRow from 'components/TableRow';

import Table from '../';

const content = <div className="unique" />;

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Table>
        <TableHeader>{content}</TableHeader>
        <TableBody>
          <TableRow>{content}</TableRow>
        </TableBody>
      </Table>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
