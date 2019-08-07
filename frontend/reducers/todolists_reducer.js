import merge from 'lodash';
import {
    RECEIVE_TODOLISTS,
    RECEIVE_TODOLIST,
    REMOVE_TODOLIST
} from '../actions/todo_list_actions';

export const TodolistsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_TODOLISTS:
            return newState;
        case RECEIVE_TODOLIST:
            return Object.assign(newState, {[action.todolist.id]: action.todolist})
        case REMOVE_TODOLIST:
            delete newState[action.todolist.id];
            return newState;
        default:
            return state; 
    }
}