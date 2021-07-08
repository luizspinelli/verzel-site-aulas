import React from 'react';

import { Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import EditClass from '../pages/EditiClass/indes';
import EditModule from '../pages/EditModule/indes';
import Logout from '../pages/Logout';
import NewClass from '../pages/NewClass/indes';
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
    <Route path="/editClass/:id" component={EditClass} />
    <Route path="/newModule" component={NewModule} />
    <Route path="/newClass" component={NewClass} />
  </Switch>
);

export default Routes;