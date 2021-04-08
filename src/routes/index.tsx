import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Company from '../pages/Company';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/company/:company+" component={Company} />
        </Switch>
    )
};

export default Routes;
