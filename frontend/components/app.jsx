import React from 'react';
import SignupContainer from './session/signup_form_container';
import LoginContainer from './session/login_form_container';
import {Route} from 'react-router-dom';

export default () => (
    <div>
        <Route path='/signup' component={SignupContainer}/>
        <Route path='/login' component={LoginContainer} />
    </div>
)