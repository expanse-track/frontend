
import React from 'react';
import { Route, Redirect } from "react-router-dom";

const OuterPageGuard = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('xyz-todos') === null ? <Component {...props} /> : <Redirect to='/' />
    )} />
)
export default OuterPageGuard;