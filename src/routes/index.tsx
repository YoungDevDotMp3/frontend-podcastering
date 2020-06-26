import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import LogIn from '../pages/LogIn';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/signin" component={SignIn} />
    <Route path="/signin" component={LogIn} />
  </Switch>
);

export default Routes;
