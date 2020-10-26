import React from 'react';
import { Switch } from "react-router-dom";

import AppRoute from './AppRoute';
import LoginLayout from '../components/LoginLayout'
import Home from '../containers/Home';
import Login from '../containers/Login';
import Page1 from '../containers/Page1';
import Page2 from '../containers/Page2';


const Routes = () => {
    return (
        <Switch>
            <AppRoute exact path="/" component={Login} layout={LoginLayout} />
            <AppRoute exact path="/home" component={Home} />
            <AppRoute exact path="/page1" component={Page1} />
            <AppRoute exact path="/page2" component={Page2} />
        </Switch>
    )
}
export default Routes;