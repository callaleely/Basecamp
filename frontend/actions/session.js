import * as SessionApiUtil from '../utils/session.js';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveSessionErrors = (errs) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errs
})

export const signup = formUser => dispatch => (
    SessionApiUtil.postUser(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
    err => (
        dispatch({ receiveSessionErrors })
    )));

export const login = formUser => dispatch => {
    return(
    SessionApiUtil.postSession(formUser)
        .then(user => dispatch(receiveCurrentUser(user)),
        err => {
            console.log(err);
            (dispatch({ 
                type: RECEIVE_SESSION_ERRORS, 
                errors: err.responseText }))
            }
    ))};

export const logout = () => dispatch => (
    SessionApiUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()),
        err => (
            dispatch({ type: RECEIVE_SESSION_ERRORS, errors: err.responseText })
            )));


