import React from 'react';
import SignupContainer from './session/signup_form_container';
import LoginContainer from './session/login_form_container';
import SplashForm from './splash/splash_form';
import {Route, Switch} from 'react-router-dom';
import ScopeIndexContainer from './scope/scope_index_container';
import ScopeShowContainer from './scope/scope_show_container';
import EventIndexContainer from './event/event_index_container';
import TodolistIndexContainer from './todo_list/todolist_index_container';
import Modal from './modal/modal';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';

export default () => (
    <div> 
        <Modal/>
        <Switch>
            <Route path='/signup' component={SignupContainer}/>
            <Route path='/login' component={LoginContainer} />
            <ProtectedRoute path='/scopes/:scopeId/schedules' component={EventIndexContainer}/>
            <ProtectedRoute path='/scopes/:scopeId/todo_lists' component={TodolistIndexContainer}/>
            <ProtectedRoute path='/scopes/:scopeId' component={ScopeShowContainer}/>
            <Route path='/scopes' component={ScopeIndexContainer} />
            <Route path='/' component={SplashForm}/>
        </Switch>
    </div>
)