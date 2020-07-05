import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import LogIn from '../pages/LogIn';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Info from '../pages/Info';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/signin" component={SignIn} />
    <Route path="/login" component={LogIn} />
    <Route path="/info" component={Info} />
  </Switch>
);

export default Routes;
