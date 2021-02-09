import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Company from '../pages/Company';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

// import AuthContext from '../contexts/auth';

const Routes: React.FC = () => {
    // const { signed } = useContext(AuthContext);

    return (
        // signed ? <h1>ok</h1> : 
        // <Login />

        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/company/:company+" component={Company} />
        </Switch>
    )
};

export default Routes;
