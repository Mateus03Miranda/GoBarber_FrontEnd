import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/">
            <SignIn />
        </Route>
        <Route path="/signup">
            <SignUp />
        </Route>
    </Switch>
);

export default Routes;
