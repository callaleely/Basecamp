import * as ApiUtil from '../utils/scope_api_util';

export const RECEIVE_SCOPES = "RECEIVE_SCOPES";
export const RECEIVE_SCOPE = "RECEIVE_SCOPE";
export const REMOVE_SCOPE = "REMOVE_SCOPE";

export const fetchScopes = () => dispatch => (
    ApiUtil.fetchScopes()
        .then(scopes => dispatch({type: RECEIVE_SCOPES, scopes: scopes}))
)

export const fetchScope = (id) => dispatch => (
    ApiUtil.fetchScope(id)
        .then(scope => dispatch({type: RECEIVE_SCOPE, scope}))
)

export const createScope = scope => dispatch => (
    ApiUtil.createScope(scope)
        .then(scope => dispatch({type: RECEIVE_SCOPE, scope}))
)

export const updateScope = scope => dispatch => (
    ApiUtil.updateScope(scope)
        .then(scope => dispatch({type: RECEIVE_SCOPE, scope}))
)

export const deleteScope = (id) => (
    ApiUtil.deleteScope(id)
        .then(scope => dispatch({type: REMOVE_SCOPE, scope}))
)