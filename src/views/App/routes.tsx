import * as React from 'react';
import { Route, Switch } from 'react-router';

import Admin from '../Admin/Admin';

const routes = (
  <Switch>
    <Route exact path="/" component={Admin}></Route>
  </Switch>
);

export default routes;