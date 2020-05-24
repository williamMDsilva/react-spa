
import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";

const AuthService = {
    get isAuthenticated(){
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('name');

        return (token && name);
    },
    authenticate(cb) {
      
    },
    signout(cb) {

    }
};

function RouteMap(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

function RouteMapAuth(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                AuthService.isAuthenticated ?
                    <route.component {...props} routes={route.routes} />
                    : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            )}
        />
    );
}

export default function routerMapper(routes, isAuthMapper) {
    if (isAuthMapper) {
        return routes.map((route, i) => (
            <RouteMapAuth key={i} {...route} />
        ));
    }

    return routes.map((route, i) => (
        <RouteMap key={i} {...route} />
    ));
}
