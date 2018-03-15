import React from 'react';
import Table from 'components/Table';
import TableFooter from 'components/TableFooter';
import DashboardHeader from './DashboardHeader';
import BuildList from './BuildList';
import buildReport from 'data.json';
import styles from './Dashboard.scss';

const Dashboard = () => (
  <Table className={styles.dashboard}>
    <DashboardHeader />
    <BuildList data={buildReport} />
    <TableFooter className={styles.tableFooter}>
      <div>Dashboard Monitor</div>
    </TableFooter>
  </Table>
);

export default Dashboard;
