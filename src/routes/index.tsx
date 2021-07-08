import React from 'react';

import { Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import EditModule from '../pages/EditModule/indes';
import Logout from '../pages/Logout';
import NewModule from '../pages/NewModule/indes';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/logout" component={Logout} />
    <Route path="/editModule/:id" component={EditModule} />
    <Route path="/newModule" component={NewModule} />
  </Switch>
);

export default Routes;