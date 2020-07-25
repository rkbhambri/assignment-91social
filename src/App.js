import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { authenticated_routes } from './Routes';
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

const App = (props) => {

    const getRedirectPath = (routesArray) => {
        let routeExist = false;
        for (let i = 0; i < routesArray.length; i++) {
            if (routesArray[i].path === window.location.pathname) {
                routeExist = true;
            }
        }
        return routeExist ? window.location.pathname : '/history';
    };

    let routes = (
        <Layout>
            <React.Suspense fallback={<Loader />}>
                {
                    authenticated_routes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />)
                }
            </React.Suspense>
            <Redirect exact to={getRedirectPath(authenticated_routes)} />
        </Layout>
    );

    return (
        <Switch>
            {routes}
        </Switch>
    );
}

export default App;
