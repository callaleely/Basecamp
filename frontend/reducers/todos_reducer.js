import merge from 'lodash';
import {
    RECEIVE_TODOS,
    RECEIVE_TODO,
    REMOVE_TODO
} from '../actions/todo_actions';

export const TodosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TODOS:
            return merge ({}, action.todos);
        case RECEIVE_TODO:
            return merge ({}, state, {[action.todo.id]: action.todo})
        case REMOVE_TODO:
            let newState = merge({}, state);
            delete newState[action.todo.id];
            return newState;
        default:
            return state; 
    }
}