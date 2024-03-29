import * as ApiUtil from '../utils/scope_api_util';

export const RECEIVE_SCOPES = "RECEIVE_SCOPES";
export const RECEIVE_SCOPE = "RECEIVE_SCOPE";
export const REMOVE_SCOPE = "REMOVE_SCOPE";

export const fetchScopes = () => dispatch => {
    return(
    ApiUtil.fetchScopes()
        .then(scopes => dispatch({type: RECEIVE_SCOPES, scopes}))
    )}

export const fetchScope = (id) => dispatch => { 
    return (
    ApiUtil.fetchScope(id)
        .then(scope => dispatch({type: RECEIVE_SCOPE, scope}))
    )
}

export const createScope = scope => dispatch => {
    return (
    ApiUtil.createScope(scope)
        .then(scope => dispatch({type: RECEIVE_SCOPE, scope}))
)}

export const updateScope = scope => dispatch => (
    ApiUtil.updateScope(scope)
        .then(scope => dispatch({type: RECEIVE_SCOPE, scope}))
)

export const deleteScope = (id) => dispatch => (
    ApiUtil.deleteScope(id)
        .then(scope => dispatch({type: REMOVE_SCOPE, scope}))
)