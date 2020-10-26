import React from 'react';
import { Route } from "react-router-dom";
import MainLayout from '../components/MainLayout';

const AppRoute = (props) => {
    const { component: Component, ...rest } = props;
    const Layout = props.layout ? props.layout : MainLayout;

    return (
        <Route {...rest} render={props => (
            <Layout>
                <Component {...props} /> 
                {/* ...props -> pass from ...rest to use in component */}
            </Layout>
        )} />
    );
}
export default AppRoute;