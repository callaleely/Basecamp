import React from 'react';
import {withRouter} from 'react-router-dom';
import {Route, Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
        )
    }/>

)

const Protected = ({loggedIn, path, component: Component, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
        )
    } />
);


const mapStateToProps = state => {
        return {
        loggedIn: Boolean(state.session.currentUser)
    }
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));