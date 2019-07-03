import React from 'react';
import SignupContainer from './session/signup_form_container';
import {Route} from 'react-router-dom';

export default () => {
    return (
        <div> 
            <h3>Hello</h3>
            <Route path='/signup' component={SignupContainer} />
        </div>
    )
}
