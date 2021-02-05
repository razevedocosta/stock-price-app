import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Company from '../pages/Company';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/company/:company+" component={Company} />
    </Switch>
)

export default Routes;
