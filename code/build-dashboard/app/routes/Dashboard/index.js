import React from 'react';
import Chunk from 'components/Chunk';

const loadDashboardContent = (/* webpackChunkName: "dashboard" */) => import('./components');

const Dashboard = () => <Chunk load={loadDashboardContent} />;

export default Dashboard;
