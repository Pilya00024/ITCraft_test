import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import routeNames from './utils/routeNames';
import { loadable } from './utils/loadable';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './App.scss';

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to={routeNames.market} />
          <Route exact path={routeNames.login} component={loadable.login} />
          <PrivateRoute exact path={routeNames.market} component={loadable.market} />
          <PrivateRoute exact path={routeNames.cart} component={loadable.cart} />
          <Route component={loadable.notFound} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
