import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import routeNames from '../../utils/routeNames';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthorization } = rest;
    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    isAuthorization ?
                    <Component {...props} />
                    : (
                        <Redirect
                            to={routeNames.login}
                        />
                    )
                )
            }}
        />
    )
};

const  mapStateToProps = state => ({
    isAuthorization: state.currentUser.isAuthorization
})

export default connect(mapStateToProps,null)(PrivateRoute);