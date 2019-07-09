import merge from 'lodash';
import {
    RECEIVE_SCOPES,
    RECEIVE_SCOPE,
    REMOVE_SCOPE
} from '../actions/scope_actions'

const ScopesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SCOPES:
            return merge({}, action.scopes);
        case RECEIVE_SCOPE:
            return merge({}, state, action.scope)
        case REMOVE_SCOPE:
            let newState = merge({}, state);
            delete newState[action.scope.id];
            return newState;
        default:
            return state;
    }
}

export default ScopesReducer;