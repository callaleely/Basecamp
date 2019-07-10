import merge from 'lodash';
import {
    RECEIVE_TODOLISTS,
    RECEIVE_TODOLIST,
    REMOVE_TODOLIST
} from '../actions/todo_list_actions';

export const TodolistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TODOLISTS:
            return merge ({}, action.todolists);
        case RECEIVE_TODOLIST:
            return merge ({}, state, {[action.todolist.id]: action.todolist})
        case REMOVE_TODOLIST:
            let newState = merge({}, state);
            delete newState[action.todolist.id];
            return newState;
        default:
            return state; 
    }
}