import React from 'react';
import TableHeader from 'components/TableHeader';
import TableRow from 'components/TableRow';
import Column from 'components/Column';
import styles from './DashboardHeader.scss';

const DashboardHeader = () => (
  <TableHeader>
    <TableRow>
      <Column className={styles.changeListCol}>
        <span>Changelist / Build</span>
      </Column>
      <Column className={styles.ownerCol}>
        <span>Owner</span>
      </Column>
      <Column className={styles.timeCol}>
        <span>Time Started</span>
      </Column>
      <Column className={styles.stateCol}>
        <span>State</span>
      </Column>
      <Column className={styles.statusCol}>
        <span>Metrics</span>
      </Column>
      <Column className={styles.statusCol}>
        <span>Build</span>
      </Column>
      <Column className={styles.statusCol}>
        <span>Unit Test</span>
      </Column>
      <Column className={styles.statusCol}>
        <span>Functional Test</span>
      </Column>
    </TableRow>
  </TableHeader>
);

export default DashboardHeader;
