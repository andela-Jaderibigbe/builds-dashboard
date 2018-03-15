// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import AppError from 'components/AppError';
import Header from 'components/Header';
import Dashboard from 'routes/Dashboard';
import './style.scss';

const App = () => (
  <ErrorBoundary fallbackComponent={AppError}>
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </main>
  </ErrorBoundary>
);

export default App;
