import React from 'react';
import SignupContainer from './session/signup_form_container';
import LoginContainer from './session/login_form_container';
import SplashForm from './splash/splash_form';
import {Route} from 'react-router-dom';
import ScopeIndexContainer from './scope/scope_index_container';

export default () => (
    <div>
        <Route exact path='/' component={SplashForm}/>
        <Route path='/signup' component={SignupContainer}/>
        <Route path='/login' component={LoginContainer} />
        <Route path='/scopes' component={ScopeIndexContainer} />
    </div>
)