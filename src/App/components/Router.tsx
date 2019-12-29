import React from 'react';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Switch, Route } from 'react-router-dom';

import { RouteType } from './../types';

const Router = ({ routes, history, children }: { routes: RouteType[], history: any, children: any }) =>
    <ConnectedRouter history={history}>
        {children}
        <Switch>
            {routes.map((route: any, i: any) => <RouteWithSubRoutes key={i} {...route} />)}
            <Route path="*" render={() => <h1>404! Not Found</h1>} />
        </Switch>
    </ConnectedRouter>


const RouteWithSubRoutes = (route: any) => <Route
    path={route.path}
    render={(props: any) => <route.component {...props} routes={route.routes} />}
/>


export default Router;
