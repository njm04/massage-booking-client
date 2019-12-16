import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../utils/auth';

export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useContext(authContext);
    return (
        <Route 
            {...rest}
            render={({ location }) => 
                auth.authenticated() ? (
                    children
                ) : (
                    <Redirect 
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}