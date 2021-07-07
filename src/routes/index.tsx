import React from 'react';

import { Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Logout from '../pages/Logout';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/logout" component={Logout} />
  </Switch>
);

export default Routes;