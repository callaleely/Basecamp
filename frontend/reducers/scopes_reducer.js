import merge from 'lodash';
import {
    RECEIVE_SCOPES,
    RECEIVE_SCOPE,
    REMOVE_SCOPE
} from '../actions/scope_actions'

const ScopesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_SCOPES:
            return action.scopes;
        case RECEIVE_SCOPE:
            newState[action.scope.id] = action.scope;
            return newState;
        case REMOVE_SCOPE:
            delete newState[action.scope.id];
            return newState;
        default:
            return state;
    }
}

export default ScopesReducer;